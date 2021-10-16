import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IHomeowner } from './homeowner.dto';
import { HomeownerService } from './homeowner.service';

@Controller('homeowner')
// @UseGuards(AuthGuard('jwt'))
export class HomeownerController {
  constructor(private srv: HomeownerService) { }

  @Get()
  getAll(@Query() dto: any): Promise<IHomeowner[]> {
    return this.srv.getHomeowners(dto);
  }

  @Get('/:id')
  get(@Param('id') id: string): Promise<IHomeowner> {
    return this.srv.getHomeowner(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<IHomeowner> {
    return this.srv.deleteById(id);
  }

  @Post()
  create(@Body() dto: IHomeowner): Promise<IHomeowner> {
    return this.srv.createHomeowner(dto);
  }

  @Patch()
  update(@Body() dto: IHomeowner): Promise<IHomeowner> {
    return this.srv.updateHomeowner(dto);
  }
}
