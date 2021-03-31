import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { Homeowner } from './homeowner.entity';
import { HomeownerRepository } from './homeowner.repository';

@Injectable()
export class HomeownerService extends BaseService<Homeowner> {
  constructor(@InjectRepository(HomeownerRepository) public repo: HomeownerRepository) {
    super(repo);
  }

}
