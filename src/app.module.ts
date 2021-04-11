import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { OnboardingModule } from './on-boarding/on-boarding.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { HomeownerModule } from './homeowner/homeowner.module';
import { TenantModule } from './tenant/tenant.module';
import { ChildrenModule } from './children/children.module';
import { PartnerModule } from './partner/partner.module';
import { BusinessModule } from './business/business.module';
import { OccupantModule } from './occupant/occupant.module';
import { PersonalModule } from './personal/personal.module';
import { DocumentModule } from './document/document.module';

const apiModules = [
  OnboardingModule,
  HomeownerModule,
  TenantModule,
  ChildrenModule,
  PartnerModule,
  BusinessModule,
  OnboardingModule,
  OccupantModule,
  PersonalModule,
  DocumentModule
];

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: 'dd9b4b6a-5028-4508-b5d0-9340ee56a5b8',
    //   signOptions: {
    //     expiresIn: 3600
    //   }
    // }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ...apiModules
  ]
})
export class AppModule {}
