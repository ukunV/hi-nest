import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // request 자체를 금지
      transform: true, // request를 원하는 실제 타입으로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
