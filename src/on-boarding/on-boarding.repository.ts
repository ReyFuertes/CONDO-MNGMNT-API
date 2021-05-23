import { IDocument } from 'src/document/document.dto';
import { DocumentRepository } from 'src/document/document.repository';
import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IOnboarding } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';

@EntityRepository(Onboarding)
export class OnboardingRepository extends Repository<Onboarding> {

  async getOnboardings(dto: any): Promise<IOnboarding[]> {
    const query = this.createQueryBuilder('onboarding')
      .leftJoinAndSelect('onboarding.personal', 'personal')
      .leftJoinAndSelect('onboarding.spouse', 'spouse')

    const results = await query.getMany();

    const response: IOnboarding[] = await Promise.all(results?.map(async (r: IOnboarding) => {
      return {
        ...r,
        documents: await this.getDocuments(r?.id)
      }
    }));
    return response;
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