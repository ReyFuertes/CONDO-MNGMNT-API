import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { join } from 'path';
import { DocumentService } from './document.service';
@Controller('documents')
//@UseGuards(AuthGuard('jwt'))
export class documentsController {
  constructor(private srv: DocumentService) { }

  /* serve file image */
  @Get('/:filename')
  get(@Param('filename') filename, @Res() res) {
    try {
      const root_path: string = join(__dirname, '../../../uploads/documents/');
      return res.sendFile(`${filename}`, { root: root_path });
    } catch (error) {
      console.log('Cannot find the file: ' + filename);
    }
  }
}
