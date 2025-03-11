import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())

  await app.listen(5000);


  // ✅ Use NestJS built-in method to log routes
  const server = app.getHttpServer();
  const router = server._events.request?._router;

  if (router) {
    Logger.log('Available Routes:');
    router.stack
      .filter(layer => layer.route)
      .forEach(layer => Logger.log(`${Object.keys(layer.route.methods)[0].toUpperCase()} ${layer.route.path}`));
  } else {
    Logger.warn('Router is undefined, unable to list routes.');
  }
}

bootstrap();
