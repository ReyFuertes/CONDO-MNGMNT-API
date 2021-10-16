import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Image } from './image.entity';
import { ImageRepository } from './image.repository';

@Injectable()
export class ImageService extends BaseService<Image> {
  constructor(@InjectRepository(ImageRepository) public repo: ImageRepository) {
    super(repo);
  }

  async createImage(dto: any): Promise<Image> {
    return this.repo.createImage(dto);
  }
}
