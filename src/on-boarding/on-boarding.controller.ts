import { Controller, Post, UseInterceptors, Param, UploadedFile, HttpException, HttpStatus, Get, Res, UploadedFiles, Patch, Body, UseGuards, Req, BadRequestException, Query, Delete } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { IOnboarding } from 'src/on-boarding/on-boarding.dto';
import { OnboardingService } from './on-boarding.service';
import { join } from 'path';
import { diskStorage } from 'multer';
import { filter } from 'src/config/helpers/util';
import { ONBOARDINGUPLOADPATH } from 'src/config/helpers/constants';

let fs = require('fs-extra');

@Controller('onboarding')
// @UseGuards(AuthGuard('jwt'))
export class OnboardingController {
  constructor(private srv: OnboardingService) { }

  @Get()
  getAll(@Query() dto: any): Promise<IOnboarding[]> {
    return this.srv.getOnboardings(dto);
  }

  @Get('/:id')
  get(@Param('id') id: string): Promise<IOnboarding> {
    return this.srv.getOnboarding(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<IOnboarding> {
    return this.srv.deleteById(id);
  }

  @Post()
  create(@Body() dto: IOnboarding): Promise<IOnboarding> {
    return this.srv.createOnboarding(dto);
  }

  @Patch()
  update(@Body() dto: IOnboarding): Promise<IOnboarding> {
    return this.srv.updateOnboarding(dto);
  }
}

function fileNameFilter(req, file, cb) {
  cb(null, file.originalname)
}