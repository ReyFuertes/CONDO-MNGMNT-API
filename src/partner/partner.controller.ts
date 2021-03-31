import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PartnerService } from './partner.service';

@Controller('partner')
@UseGuards(AuthGuard('jwt'))
export class PartnerController {
  constructor(private srv: PartnerService) { }

}
