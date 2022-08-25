import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');


  await app.listen(3000);
}
bootstrap();
