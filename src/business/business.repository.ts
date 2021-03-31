import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Business } from './business.entity';

@EntityRepository(Business)
export class BusinessRepository extends Repository<Business> {

}