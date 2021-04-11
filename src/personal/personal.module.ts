import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonalRepository } from './personal.repository';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalRepository])],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule { }
