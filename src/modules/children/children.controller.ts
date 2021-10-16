import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChildrenService } from './children.service';

@Controller('children')
@UseGuards(AuthGuard('jwt'))
export class ChildrenController {
  constructor(private srv: ChildrenService) { }

}
