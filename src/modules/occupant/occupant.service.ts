import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Occupant } from './occupant.entity';
import { OccupantRepository } from './occupant.repository';

@Injectable()
export class OccupantService extends BaseService<Occupant> {
  constructor(@InjectRepository(OccupantRepository) public repo: OccupantRepository) {
    super(repo);
  }

}
