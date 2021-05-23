import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnboardingModule } from './on-boarding/on-boarding.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { HomeownerModule } from './homeowner/homeowner.module';
import { TenantModule } from './tenant/tenant.module';
import { ChildrenModule } from './children/children.module';
import { SpouseModule } from './spouse/spouse.module';
import { BusinessModule } from './business/business.module';
import { OccupantModule } from './occupant/occupant.module';
import { PersonalModule } from './personal/personal.module';
import { DocumentModule } from './document/document.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UploadModule } from './upload/upload.module';
import { ImageModule } from './image/image.module';

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
