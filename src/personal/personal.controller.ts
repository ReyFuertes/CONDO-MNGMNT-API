import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PersonalService } from './personal.service';

@Controller('personal')
@UseGuards(AuthGuard('jwt'))
export class PersonalController {
  constructor(private srv: PersonalService) { }

}
