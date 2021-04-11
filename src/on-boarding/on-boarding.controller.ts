import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IOnboarding } from 'src/on-boarding/on-boarding.dto';
import { OnboardingService } from './on-boarding.service';

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
