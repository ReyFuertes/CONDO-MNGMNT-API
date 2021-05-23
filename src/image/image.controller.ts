import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Image } from './image.entity';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private srv: ImageService) { }

  @Post()
  create(@Body() dto: any): Promise<Image> {
    return this.srv.createImage(dto);
  }
}
