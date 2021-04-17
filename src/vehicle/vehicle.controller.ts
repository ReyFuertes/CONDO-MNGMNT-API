import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
@UseGuards(AuthGuard('jwt'))
export class VehicleController {
  constructor(private srv: VehicleService) { }

}
