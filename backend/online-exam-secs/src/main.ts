import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BASEURL, PORT } from './config/all.config';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  var whitelist = ['http://localhost:3000', 'https://frontendfinal.netlify.app'];
  // app.enableCors({
  //   origin: function (origin, callback) {
  //     if (!origin || whitelist.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   },
  // });
  app.enableCors({
    origin: ['http://localhost:3000', 'https://frontendfinal.netlify.app'],
    credentials: true,
  })
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT || 3000, () => {
    console.log('BACK END RUNNING ON =>', BASEURL);
  });
}
bootstrap();
