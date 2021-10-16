import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Occupant } from './occupant.entity';

@EntityRepository(Occupant)
export class OccupantRepository extends Repository<Occupant> {

}