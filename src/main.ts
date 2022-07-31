import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BASEURL, PORT } from './config/all.config';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT || 3000, () => {
    console.log('BACK END RUNNING ON =>', BASEURL);
  });
}
bootstrap();
