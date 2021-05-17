import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IOnboarding } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';

@EntityRepository(Onboarding)
export class OnboardingRepository extends Repository<Onboarding> {

  async getOnboardings(dto: any): Promise<IOnboarding[]> {
    const query = this.createQueryBuilder('onboarding')
      .leftJoinAndSelect('onboarding.documents', 'documents')
      .leftJoinAndSelect('onboarding.partner', 'partner')
      .leftJoinAndSelect('onboarding.personal', 'personal')
      .leftJoinAndSelect('onboarding.vehicles', 'vehicles')
      .leftJoinAndSelect('onboarding.occupants', 'occupants')



    const results = await query.getMany();
    return results;
  }

  async getOnboarding(id: string): Promise<IOnboarding> {
    const query = this.createQueryBuilder('onboarding');
    const result = await query
      .where("id = :id", { id })
      .getOne()
    return result;
  }

  async deleteById(id: string): Promise<IOnboarding> {
    const exist = await this.findOne({ id });
    if (exist) {
      this.createQueryBuilder()
        .delete()
        .from(Onboarding)
        .where("id = :id", { id })
        .execute();
      return exist;
    }
    return null;
  }

  async createOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    const result = await this.save(dto);
    return result;
  }

  async updateOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    const result = await this.save(dto);
    return result;
  }
}