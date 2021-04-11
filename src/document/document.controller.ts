import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DocumentService } from './document.service';

@Controller('documents')
@UseGuards(AuthGuard('jwt'))
export class documentsController {
  constructor(private srv: DocumentService) { }

}
