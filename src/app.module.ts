import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnboardingModule } from './modules/on-boarding/on-boarding.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { HomeownerModule } from './modules/homeowner/homeowner.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { SpouseModule } from './modules/spouse/spouse.module';
import { BusinessModule } from './modules/business/business.module';
import { OccupantModule } from './modules/occupant/occupant.module';
import { PersonalModule } from './modules/personal/personal.module';
import { DocumentModule } from './modules/document/document.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { typeOrmConfig } from './modules/config/typeorm.config';
import { UploadModule } from './modules/upload/upload.module';
import { ImageModule } from './modules/image/image.module';
import { ChildrenModule } from './modules/children/children.module';

const apiModules = [
  OnboardingModule,
  HomeownerModule,
  TenantModule,
  ChildrenModule,
  SpouseModule,
  BusinessModule,
  OnboardingModule,
  OccupantModule,
  PersonalModule,
  DocumentModule,
  VehicleModule,
  UploadModule,
  ImageModule
];

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ...apiModules
  ]
})
export class AppModule {}
