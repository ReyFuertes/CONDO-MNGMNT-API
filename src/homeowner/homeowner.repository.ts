import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Homeowner } from './homeowner.entity';

@EntityRepository(Homeowner)
export class HomeownerRepository extends Repository<Homeowner> {

}