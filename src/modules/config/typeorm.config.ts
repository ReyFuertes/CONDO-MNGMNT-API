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
  synchronize: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
}

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'cma-db-server-v1.postgres.database.azure.com',
//   port: 5432,
//   username: "cmadevapiv1admin@cma-db-server-v1",
//   password: '7c74a169-81d9-4e9b-90a7-efba9721f05a',
//   database: 'cma',
//   entities: [__dirname + 'dist/../**/*.entity.{js,ts}'],
//   ssl: true,
//   synchronize: false,
//   logging: false,
//   namingStrategy: new SnakeNamingStrategy(),
// }