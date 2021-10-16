import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OccupantService } from './occupant.service';

@Controller('occupant')
@UseGuards(AuthGuard('jwt'))
export class OccupantController {
  constructor(private srv: OccupantService) { }

}
