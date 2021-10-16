import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TenantService } from './tenant.service';

@Controller('tenant')
@UseGuards(AuthGuard('jwt'))
export class TenantController {
  constructor(private srv: TenantService) { }

}
