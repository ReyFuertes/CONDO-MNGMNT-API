import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { PersonalRepository } from '../personal/personal.repository';
import { IHomeowner } from './homeowner.dto';
import { Homeowner } from './homeowner.entity';

@EntityRepository(Homeowner)
export class HomeownerRepository extends Repository<Homeowner> {

  async getHomeowners(dto: any): Promise<IHomeowner[]> {
    const repo = getCustomRepository(PersonalRepository);
    const query = repo.createQueryBuilder('personal');
    const results = await query
      .orderBy('created_at', 'DESC')
      .getMany();

    const response = results.map(personal => {
      return {
        ...personal,
        
      }
    });

    return response;
  }

  async getHomeowner(id: string): Promise<IHomeowner> {
    const query = this.createQueryBuilder('homeowner');
    const result = await query
      .where("id = :id", { id })
      .getOne()

    return result;
  }

  async deleteById(id: string): Promise<IHomeowner> {
    const exist = await this.findOne({ id });
    if (exist) {
      this.createQueryBuilder()
        .delete()
        .from(Homeowner)
        .where("id = :id", { id })
        .execute();

      return exist;
    }
    return null;
  }

  async createHomeowner(dto: IHomeowner): Promise<IHomeowner> {
    const result = await this.save(dto);

    return result;
  }

  async updateHomeowner(dto: IHomeowner): Promise<IHomeowner> {
    const result = await this.save(dto);

    return result;
  }
}