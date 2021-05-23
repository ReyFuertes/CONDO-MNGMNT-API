import { Repository, EntityRepository, getRepository, getCustomRepository } from 'typeorm';
import { Image } from './image.entity';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {

  async createImage(dto: any): Promise<Image> {
    const result = await this.save(dto);
    return result;
  }
}