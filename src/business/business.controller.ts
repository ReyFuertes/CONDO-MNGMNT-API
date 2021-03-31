import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BusinessService } from './business.service';

@Controller('Business')
@UseGuards(AuthGuard('jwt'))
export class BusinessController {
  constructor(private srv: BusinessService) { }

}
