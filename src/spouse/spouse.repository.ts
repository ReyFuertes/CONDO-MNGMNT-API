import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Spouse } from './spouse.entity';

@EntityRepository(Spouse)
export class SpouseRepository extends Repository<Spouse> {

}