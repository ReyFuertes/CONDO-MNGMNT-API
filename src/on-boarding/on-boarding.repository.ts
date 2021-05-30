import { IDocument } from 'src/document/document.dto';
import { DocumentRepository } from 'src/document/document.repository';
import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IOnboadingResponseDto, IOnboarding } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';
import { sqlOp, UserRoleType } from 'src/models/generic.model';
import { BadRequestException } from '@nestjs/common';

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

    const response: IOnboarding[] = await Promise.all(results?.map(async (r: IOnboarding) => {
      return {
        ...r,
        documents: await this.getDocuments(r?.id)
      }
    }));
    return {
      data: response,
      count: result_count
    };
  }

  async getDocuments(onboarding_id: string): Promise<IDocument[]> {
    const repo = getCustomRepository(DocumentRepository);
    const query = repo.createQueryBuilder('document');
    const results = await query
      .where('onboarding_id = :onboarding_id', { onboarding_id })
      .getMany();

    return results;
  }

  async getOnboarding(id: string): Promise<IOnboarding> {
    const query = this.createQueryBuilder('onboarding');
    const result = await query
      .where('id = :id', { id })
      .getOne()
    return result;
  }

  async deleteById(id: string): Promise<IOnboarding> {
    const exist = await this.findOne({ id });
    if (exist) {
      this.createQueryBuilder()
        .delete()
        .from(Onboarding)
        .where('id = :id', { id })
        .execute();
      return exist;
    }
    return null;
  }

  async createOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    return await this.save(dto);
  }

  async updateOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    const result = await this.save(dto);
    return result;
  }
}