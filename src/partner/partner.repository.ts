import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Partner } from './partner.entity';

@EntityRepository(Partner)
export class PartnerRepository extends Repository<Partner> {

}