import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { FormsModule } from './forms/forms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
// import { dataSource } from './config/connectiondb.config';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { PostModule } from './post/post.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  // imports: [
  //   ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  //   TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  //   UsersModule,
  //   AuthModule,
  //   ClassesModule, 
  //   FormsModule, PostModule
  // ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
