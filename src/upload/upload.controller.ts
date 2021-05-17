import { Controller, Post, UseInterceptors, Param, UploadedFile, HttpException, HttpStatus, Get, Res, UploadedFiles, Patch, Body, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { join, extname } from 'path';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';
import * as moment from 'moment';

let fs = require('fs-extra');

@Controller('upload')
// @UseGuards(AuthGuard('jwt'))
export class UploadController {
  constructor() { }

  @Post()
  @UseInterceptors(FilesInterceptor('files', 50, {
    storage: diskStorage({
      destination:async (req, file, cb) => {
        let path = join(__dirname, `../../../uploads/documents/`);
        if (!fs.existsSync(path)) {
          fs.mkdirsSync(path);
        }
        cb(null, path);
      },
      filename: (req, file, cb) => fileNameFilter(req, file, cb),
    }),
    fileFilter: (req, file, cb) => filter(req, file, cb),
  }))
  async uploadMultiple(@UploadedFiles() files: any[], @Req() req: any) {
    console.log(moment(new Date()).format('MM-DD-YYYY: hh:mm') + ': ' + ` uploaded: ${files?.length} files`);
  }
}

function fileNameFilter(req, file, cb) {
  cb(null, file.originalname)
}

function filter(req, file, cb) {
  let ext = extname(file.originalname);
  // if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
  //   return cb(new HttpException('Only images are allowed!', HttpStatus.BAD_REQUEST), null);
  // }
  cb(null, true);
}