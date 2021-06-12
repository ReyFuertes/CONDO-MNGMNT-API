import { IDocumentDto } from 'src/document/document.dto';
import { DocumentRepository } from 'src/document/document.repository';
import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IOnboadingResponseDto, IOnboardingDto } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';
import { sqlOp, UserRoleType } from 'src/models/generic.model';
import { BadRequestException } from '@nestjs/common';
import { IOccupantDto } from 'src/occupant/occupant.dto';
import { OccupantRepository } from 'src/occupant/occupant.repository';
import * as _ from 'lodash';
import { IVehicleDto } from 'src/vehicle/vehicle.dto';
import { VehicleRepository } from 'src/vehicle/vehicle.repository';

@EntityRepository(Onboarding)
export class OnboardingRepository extends Repository<Onboarding> {

  async getOnboardings(dto: any): Promise<IOnboadingResponseDto> {
    const query = this.createQueryBuilder('onboarding')
      .leftJoinAndSelect('onboarding.personal', 'personal')
      .leftJoinAndSelect('onboarding.spouse', 'spouse');

    const query_count = this.createQueryBuilder('onboarding')
    const result_count = await query_count.getCount();

    const where = dto;

    const page = Object.assign({}, {
      take: dto?.take,
      skip: dto?.skip
    });
    delete where?.skip;
    delete where?.take;

    try {
      Object.entries(where)?.forEach(c => {
        const obj = Object.assign({}, Object.entries(c)
          .reduce((acc, [k, v]) => ({ ...acc, [c[0]]: `%${v}%` }), {})
        );
        let op: sqlOp = sqlOp.iLike;

        //if (+(Object.values(obj)[0]) || (Object.keys(obj)[0]).includes('.id')) op = sqlOp.eq;

        query.orWhere(`${Object.keys(obj)} ${op} :${Object.keys(obj)}`, obj)
      });
    } catch (error) {
      throw new BadRequestException();
    }

    if (page?.skip) {
      query.skip(page?.skip)
    }
    if (page?.take) {
      query.take(page?.take)
    }

    const results = await query.getMany();

    const fmtResult = await Promise.all(
      results?.map(async (r: Onboarding) => {
        return {
          ...r,
          documents: await this.getDocuments(r?.id),
          occupants: [],
          vehicles: []
        }
      }));;

    const response: IOnboardingDto[] = Object.assign([], fmtResult);

    return {
      data: response,
      count: result_count
    };
  }

  async getDocuments(onboarding_id: string): Promise<IDocumentDto[]> {
    const repo = getCustomRepository(DocumentRepository);
    const query = repo.createQueryBuilder('document');
    const results = await query
      .where('onboarding_id = :onboarding_id', { onboarding_id })
      .getMany();

    return results;
  }

  async getOccupants(onboarding_id: string): Promise<IOccupantDto[]> {
    const repo = getCustomRepository(OccupantRepository);
    const query = repo.createQueryBuilder('occupant');
    const results = await query
      .where('onboarding_id = :onboarding_id', { onboarding_id })
      .getMany();

    const response: IOccupantDto[] = Object.assign([], results?.map(r => r));

    return response;
  }

  async getVehicles(onboarding_id: string): Promise<IVehicleDto[]> {
    const repo = getCustomRepository(VehicleRepository);
    const query = repo.createQueryBuilder('vehicle');
    const results = await query
      .where('onboarding_id = :onboarding_id', { onboarding_id })
      .getMany();

    const response: IVehicleDto[] = Object.assign([], results?.map(r => r));

    return response;
  }

  async getOnboarding(id: string): Promise<IOnboardingDto> {
    const query = this.createQueryBuilder('onboarding')
      .leftJoinAndSelect('onboarding.personal', 'personal')
      .leftJoinAndSelect('onboarding.spouse', 'spouse');

    const result = await query
      .where('onboarding.id = :id', { id })
      .getOne();

    const occupants = await this.getOccupants(id);
    const vehicles = await this.getVehicles(id);
    const documents = await this.getDocuments(id);

    let response: IOnboardingDto = Object.assign({}, {
      ...result,
      occupants,
      vehicles,
      documents
    });

    return response;
  }

  async deleteById(id: string): Promise<IOnboardingDto> {
    let exist = await this.findOne({ id });
    if (exist) {
      this.createQueryBuilder()
        .delete()
        .from(Onboarding)
        .where('id = :id', { id })
        .execute();

      const response: IOnboardingDto = Object.assign(exist);
      return response
    }
    return null;
  }

  async createOnboarding(dto: IOnboardingDto): Promise<IOnboardingDto> {
    return await this.save(dto);
  }

  async updateOnboarding(dto: IOnboardingDto): Promise<IOnboardingDto> {
    console.log(dto)
    const payload = {
      id: dto?.id,
      personal: _.omitBy(dto?.personal, _.isNil),
      spouse: _.omitBy(dto?.spouse, _.isNil),
      occupants: dto?.occupants?.map(o => _.omitBy(o, _.isNil)),
      vehicles: dto?.vehicles?.map(v => _.omitBy(v, _.isNil)),
      documents: dto?.documents?.map(d => _.omitBy(d, _.isNil)),
    }

    let result = await this.save(payload);
    return await this.getOnboarding(result?.id);
  }
}