import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OnboardingRepository } from './on-boarding.repository';
import { OnboardingController } from './on-boarding.controller';
import { OnboardingService } from './on-boarding.service';

@Module({
  imports: [TypeOrmModule.forFeature([OnboardingRepository])],
  controllers: [OnboardingController],
  providers: [OnboardingService]
})
export class OnboardingModule { }
