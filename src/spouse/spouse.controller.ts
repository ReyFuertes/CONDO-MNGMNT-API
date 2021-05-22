import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SpouseService } from './spouse.service';

@Controller('spouse')
@UseGuards(AuthGuard('jwt'))
export class SpouseController {
  constructor(private srv: SpouseService) { }

}
