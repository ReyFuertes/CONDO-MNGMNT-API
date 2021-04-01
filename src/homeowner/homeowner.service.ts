import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base.service';
import { IHomeowner } from './homeowner.dto';
import { Homeowner } from './homeowner.entity';
import { HomeownerRepository } from './homeowner.repository';

@Injectable()
export class HomeownerService extends BaseService<Homeowner> {
  constructor(@InjectRepository(HomeownerRepository) public repo: HomeownerRepository) {
    super(repo);
  }

  async getHomeowners(dto: any): Promise<IHomeowner[]> {
    return this.repo.getHomeowners(dto);
  }

  async getHomeowner(id: string): Promise<IHomeowner> {
    return this.repo.getHomeowner(id);
  }

  async deleteById(id: string): Promise<IHomeowner> {
    return this.repo.deleteById(id);
  }

  async createHomeowner(dto: IHomeowner): Promise<IHomeowner> {
    return this.repo.createHomeowner(dto);
  }

  async updateHomeowner(dto: IHomeowner): Promise<IHomeowner> {
    return this.repo.updateHomeowner(dto);
  }
}
