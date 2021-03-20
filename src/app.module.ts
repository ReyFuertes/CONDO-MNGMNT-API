import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { OnboardingModule } from './on-boarding/on-boarding.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

const apiModules = [
  OnboardingModule
];

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'dd9b4b6a-5028-4508-b5d0-9340ee56a5b8',
      signOptions: {
        expiresIn: 3600
      }
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ...apiModules
  ]
})
export class AppModule {}
