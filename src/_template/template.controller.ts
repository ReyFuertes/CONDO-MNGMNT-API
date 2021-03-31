import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { templateService } from './template.service';

@Controller('template')
@UseGuards(AuthGuard('jwt'))
export class templateController {
  constructor(private srv: templateService) { }

}
