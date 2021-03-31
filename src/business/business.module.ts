import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [],
  providers: []
})
export class BusinessModule { }
