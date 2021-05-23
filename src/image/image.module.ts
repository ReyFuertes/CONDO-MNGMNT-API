import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImageRepository } from './image.repository';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [TypeOrmModule.forFeature([ImageRepository])],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule { }
