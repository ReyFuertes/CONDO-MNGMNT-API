import { UploadController } from './upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [UploadController],
  providers: []
})
export class UploadModule { }
