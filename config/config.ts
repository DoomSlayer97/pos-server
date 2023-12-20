import { ConfigModule } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

ConfigModule.forRoot({
  envFilePath: '.env'
})

const options: any = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/../src/models/*.model.ts`],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: [`${__dirname}/../migrations/*.ts`],
}

export const dataSource = new DataSource(options);