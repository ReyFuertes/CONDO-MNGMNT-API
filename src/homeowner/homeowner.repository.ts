import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { IHomeowner } from './homeowner.dto';
import { Homeowner } from './homeowner.entity';

@EntityRepository(Homeowner)
export class HomeownerRepository extends Repository<Homeowner> {

  async getHomeowners(dto: any): Promise<IHomeowner[]> {
    const query = this.createQueryBuilder('homeowner');

    const results = await query
      .orderBy('created_date', 'DESC')
      .getMany();

    return results;
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