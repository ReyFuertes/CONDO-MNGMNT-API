import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { join } from 'path';
import { DocumentService } from './document.service';
@Controller('documents')
@UseGuards(AuthGuard('jwt'))
export class documentsController {
  constructor(private srv: DocumentService) { }

  /* serve file image */
  @Get('/:id/:filename')
  get(@Param('filename') filename, @Param('id') id, @Res() res) {
    try {
      return res.sendFile(`${id}/${filename}`, { root: join(__dirname, '../../uploads/documents/') });
    } catch (error) {
      console.log('Cannot find:' + filename);
    }
  }
}
