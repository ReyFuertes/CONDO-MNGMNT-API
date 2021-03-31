import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { Children } from './children.entity';
import { ChildrenRepository } from './children.repository';

@Injectable()
export class ChildrenService extends BaseService<Children> {
  constructor(@InjectRepository(ChildrenRepository) public repo: ChildrenRepository) {
    super(repo);
  }

}
