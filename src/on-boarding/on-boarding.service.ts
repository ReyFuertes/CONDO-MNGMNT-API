import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { IOnboadingResponseDto, IOnboarding } from './on-boarding.dto';
import { Onboarding } from './on-boarding.entity';
import { OnboardingRepository } from './on-boarding.repository';

@Injectable()
export class OnboardingService extends BaseService<Onboarding> {
  constructor(@InjectRepository(OnboardingRepository) public repo: OnboardingRepository) {
    super(repo);
  }
  
  async getOnboardings(dto: any): Promise<IOnboadingResponseDto> {
    return this.repo.getOnboardings(dto);
  }

  async getOnboarding(id: string): Promise<IOnboarding> {
    return this.repo.getOnboarding(id);
  }

  async deleteById(id: string): Promise<IOnboarding> {
    return this.repo.deleteById(id);
  }

  async createOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    return this.repo.createOnboarding(dto);
  }

  async updateOnboarding(dto: IOnboarding): Promise<IOnboarding> {
    return this.repo.updateOnboarding(dto);
  }

}
