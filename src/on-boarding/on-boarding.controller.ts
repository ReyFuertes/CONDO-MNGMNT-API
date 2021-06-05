import { Controller, Post, UseInterceptors, Param, UploadedFile, HttpException, HttpStatus, Get, Res, UploadedFiles, Patch, Body, UseGuards, Req, BadRequestException, Query, Delete } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { IOnboadingResponseDto, IOnboardingDto } from 'src/on-boarding/on-boarding.dto';
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

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 50, {
    storage: diskStorage({
      destination: (req, file, cb) => {
        let path = join(__dirname, `${ONBOARDINGUPLOADPATH}${req?.body?.name}/`);
        fs.mkdirsSync(path);
        cb(null, path);
      },
      filename: (req, file, cb) => fileNameFilter(req, file, cb),
    }),
    fileFilter: (req, file, cb) => filter(req, file, cb),
  }))
  async uploadMultiple(@UploadedFiles() files: any[]) {
    console.log(Date.now() + ` uploaded contracts: ${files?.length} files`);
  }

  @Get()
  getAll(@Query() dto: any): Promise<IOnboadingResponseDto> {
    return this.srv.getOnboardings(dto);
  }

  @Get('/:id')
  get(@Param('id') id: string): Promise<IOnboardingDto> {
    return this.srv.getOnboarding(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<IOnboardingDto> {
    return this.srv.deleteById(id);
  }

  @Post()
  create(@Body() dto: IOnboardingDto): Promise<IOnboardingDto> {
    return this.srv.createOnboarding(dto);
  }

  @Patch()
  update(@Body() dto: IOnboardingDto): Promise<IOnboardingDto> {
    return this.srv.updateOnboarding(dto);
  }
}

function fileNameFilter(req, file, cb) {
  cb(null, file.originalname)
}