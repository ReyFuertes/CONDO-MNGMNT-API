import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: 'cma',
  entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}
