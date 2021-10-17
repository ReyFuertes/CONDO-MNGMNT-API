import { IDocumentDto } from 'src/modules/document/document.dto';
import { DocumentRepository } from 'src/modules/document/document.repository';
import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IOnboadingResponseDto, IOnboardingDto } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';
import { sqlOp, UserRoleType } from 'src/models/generic.model';
import { BadRequestException } from '@nestjs/common';
import { IOccupantDto } from 'src/modules/occupant/occupant.dto';
import { OccupantRepository } from 'src/modules/occupant/occupant.repository';
import * as _ from 'lodash';
import { IVehicleDto } from 'src/modules/vehicle/vehicle.dto';
import { VehicleRepository } from 'src/modules/vehicle/vehicle.repository';
import { HomeownerRepository } from '../homeowner/homeowner.repository';

@EntityRepository(Onboarding)
export class OnboardingRepository extends Repository<Onboarding> {

  async ondelete(dto: any): Promise<IOnboardingDto> {
    const is_deleted = Object.assign({}, dto, { is_deleted: true });
    const response = await this.save(is_deleted);
    return response;
  }

  async onarchive(dto: any): Promise<IOnboardingDto> {
    const is_archive = Object.assign({}, dto, { is_archived: true });
    const response = await this.save(is_archive);
    return response;
  }

  async onboard(dto: IOnboardingDto): Promise<IOnboardingDto> {
    const onboarded = Object.assign({}, dto, { onboarded: true });
    const response = await this.save(onboarded);

    if (response) {
      const repo = getCustomRepository(HomeownerRepository);
      const exist = await repo.findOne({
        where: { personal: { id: dto?.personal?.id } }
      });
      if (!exist) {
        const homeowner: IOnboardingDto = {
          onboarding: { id: dto?.id },
          personal: dto?.personal,
          spouse: dto?.spouse,
          occupants: dto?.occupants,
          documents: dto?.documents,
          vehicles: dto?.vehicles
        }
        await repo.save(homeowner);
      } else {
        throw new BadRequestException('Failed to approve onboarding');
      }
    }
    return response;
  }

  async getOnboardings(dto: any): Promise<IOnboadingResponseDto> {
    console.log(dto)
    const query = this.createQueryBuilder('onboarding')
      .leftJoinAndSelect('onboarding.personal', 'personal')
      .leftJoinAndSelect('onboarding.spouse', 'spouse')

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

    query.andWhere('onboarded = :onboarded', { onboarded: false })
      .andWhere('is_archived = :is_archived', { is_archived: false })
      .andWhere('is_deleted = :is_deleted', { is_deleted: false })

    const results = await query.getMany();

    const fmtResult = await Promise.all(
      results?.map(async (r: Onboarding) => {
        return {
          ...r,
          documents: await this.getDocuments(r?.id),
          occupants: await this.getOccupants(r?.id),
          vehicles: await this.getVehicles(r?.id),
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
    const payload = _.omitBy({
      type: dto?.type,
      personal: _.omitBy(dto?.personal, _.isNil),
      spouse: _.omitBy(dto?.spouse, _.isNil),
      occupants: dto?.occupants?.map(o => _.omitBy(o, _.isNil)),
      vehicles: dto?.vehicles?.map(v => _.omitBy(v, _.isNil)),
      documents: dto?.documents?.map(d => _.omitBy(d, _.isNil)),
    }, _.isNil);
    return await this.save(payload);
  }

  async updateOnboarding(dto: IOnboardingDto): Promise<IOnboardingDto> {
    const payload = _.omitBy({
      id: dto?.id,
      type: dto?.type,
      personal: _.omitBy(dto?.personal, _.isNil),
      spouse: _.omitBy(dto?.spouse, _.isNil),
      occupants: dto?.occupants?.map(o => _.omitBy(o, _.isNil)),
      vehicles: dto?.vehicles?.map(v => _.omitBy(v, _.isNil)),
      documents: dto?.documents?.map(d => _.omitBy(d, _.isNil)),
    }, _.isNil);
    console.log(payload)
    return await this.save(payload);
  }
}