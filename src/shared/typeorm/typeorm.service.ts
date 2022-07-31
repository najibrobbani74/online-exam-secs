import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      // url: "postgres://lrcerexfbelyle:f556de33f50a98ce95001ed61fc563cc018521d80498fdbe311bece026d550a0@ec2-54-161-255-125.compute-1.amazonaws.com:5432/dd96t00bn0rsmm",
      type: "postgres",
      host: "ec2-54-161-255-125.compute-1.amazonaws.com",
      port: 5432,
      username: "lrcerexfbelyle",
      password: "f556de33f50a98ce95001ed61fc563cc018521d80498fdbe311bece026d550a0",
      database: "dd96t00bn0rsmm",
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      // type: 'postgres',
      // host: this.config.get<string>('DATABASE_HOST'),
      // port: this.config.get<number>('DATABASE_PORT'),
      // database: this.config.get<string>('DATABASE_NAME'),
      // username: this.config.get<string>('DATABASE_USER'),
      // password: "najibrobbani74",
      // password: this.config.get<string>('DATABASE_PASSWORD'),
      // entities: ['dist/**/*.entity.{ts,js}'],
      // migrations: ['dist/migrations/*.{ts,js}'],
      // migrationsTableName: 'typeorm_migrations',
      // logger: 'file',
      // synchronize: true,
    };
  }
}
