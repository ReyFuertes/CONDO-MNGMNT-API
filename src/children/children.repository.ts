import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Children } from './children.entity';

@EntityRepository(Children)
export class ChildrenRepository extends Repository<Children> {

}