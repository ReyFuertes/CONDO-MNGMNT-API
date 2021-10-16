import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Business } from './business.entity';
import { BusinessRepository } from './business.repository';

@Injectable()
export class BusinessService extends BaseService<Business> {
  constructor(@InjectRepository(BusinessRepository) public repo: BusinessRepository) {
    super(repo);
  }

}
