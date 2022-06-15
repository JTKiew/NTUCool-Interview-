import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({   // add usage of validator
    whitelist: true,  //ensure only defined data is sent 
    transform: true,
    skipNullProperties: true,
    skipMissingProperties: true,
    skipUndefinedProperties: true
  }),);
  await app.listen(3000);
}
bootstrap();

