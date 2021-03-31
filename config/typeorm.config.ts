import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'p@55w0rd',
  database: 'cma',
  entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}
