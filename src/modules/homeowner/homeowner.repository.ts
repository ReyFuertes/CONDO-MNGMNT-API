import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { DocumentRepository } from '../document/document.repository';
import { OccupantRepository } from '../occupant/occupant.repository';
import { PersonalRepository } from '../personal/personal.repository';
import { VehicleRepository } from '../vehicle/vehicle.repository';
import { IHomeowner } from './homeowner.dto';
import { Homeowner } from './homeowner.entity';

@EntityRepository(Homeowner)
export class HomeownerRepository extends Repository<Homeowner> {

  async getHomeowners(dto: any): Promise<any> {
    const repo = getCustomRepository(HomeownerRepository);

    const occupant_repo = getCustomRepository(OccupantRepository);
    const document_repo = getCustomRepository(DocumentRepository);
    const vehicles_repo = getCustomRepository(VehicleRepository);

    /* optimize this */
    const query = repo.createQueryBuilder('homeowner');
    const results = await query
      .innerJoinAndSelect('homeowner.personal', 'personal')
      .innerJoinAndSelect('homeowner.spouse', 'spouse')
      .orderBy('homeowner.created_at', 'DESC')
      .getMany();

    const response = await Promise.all(results.map(async (homeowner) => {
      const occupants = await occupant_repo.find({
        where: { homeowner: homeowner?.id }
      });
      const documents = await document_repo.find({
        where: { homeowner: homeowner?.id }
      });
      const vehicles = await vehicles_repo.find({
        where: { homeowner: homeowner?.id }
      });
      return {
        ...homeowner,
        occupants,
        documents,
        vehicles
      }
    }));

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