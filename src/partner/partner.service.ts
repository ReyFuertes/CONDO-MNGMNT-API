import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { Partner } from './partner.entity';
import { PartnerRepository } from './partner.repository';

@Injectable()
export class PartnerService extends BaseService<Partner> {
  constructor(@InjectRepository(PartnerRepository) public repo: PartnerRepository) {
    super(repo);
  }

}
