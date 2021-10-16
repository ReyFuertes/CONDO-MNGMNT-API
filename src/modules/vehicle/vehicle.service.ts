import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService extends BaseService<Vehicle> {
  constructor(@InjectRepository(VehicleRepository) public repo: VehicleRepository) {
    super(repo);
  }

}
