import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { Personal } from './personal.entity';
import { PersonalRepository } from './personal.repository';

@Injectable()
export class PersonalService extends BaseService<Personal> {
  constructor(@InjectRepository(PersonalRepository) public repo: PersonalRepository) {
    super(repo);
  }

}
