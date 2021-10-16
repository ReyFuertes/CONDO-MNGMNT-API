import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Tenant } from './tenant.entity';
import { TenantRepository } from './tenant.repository';

@Injectable()
export class TenantService extends BaseService<Tenant> {
  constructor(@InjectRepository(TenantRepository) public repo: TenantRepository) {
    super(repo);
  }

}
