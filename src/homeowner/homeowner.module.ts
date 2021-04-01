import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HomeownerRepository } from './homeowner.repository';
import { HomeownerController } from './homeowner.controller';
import { HomeownerService } from './homeowner.service';

@Module({
  imports: [TypeOrmModule.forFeature([HomeownerRepository])],
  controllers: [HomeownerController],
  providers: [HomeownerService]
})
export class HomeownerModule { }
