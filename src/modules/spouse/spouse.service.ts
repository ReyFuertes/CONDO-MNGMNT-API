import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Spouse } from './spouse.entity';
import { SpouseRepository } from './spouse.repository';

@Injectable()
export class SpouseService extends BaseService<Spouse> {
  constructor(@InjectRepository(SpouseRepository) public repo: SpouseRepository) {
    super(repo);
  }

}
