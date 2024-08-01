import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AllExceptionsFilter } from './exceptions/AllExcepptionFilter';
import { HttpExceptionFilter } from './exceptions/httpExceptionFilter';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);
  Logger.log(`App success started on port: ${port}`);
}
bootstrap();
