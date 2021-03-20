import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { Onboarding } from './on-boarding.entity';
import { OnboardingRepository } from './on-boarding.repository';

@Injectable()
export class OnboardingService extends BaseService<Onboarding> {
  constructor(@InjectRepository(OnboardingRepository) public repo: OnboardingRepository) {
    super(repo);
  }

}
