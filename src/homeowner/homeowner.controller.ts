import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HomeownerService } from './homeowner.service';

@Controller('homeowner')
@UseGuards(AuthGuard('jwt'))
export class HomeownerController {
  constructor(private srv: HomeownerService) { }

}
