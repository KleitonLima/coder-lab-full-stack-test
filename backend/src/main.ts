import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDbConnection } from './database/config/connection.db';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { swaggerConfig } from './config/swagger.config';
import { ENVCONFIG } from './config/env.config';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: true,
    });
    app.useGlobalPipes(new ValidationPipe());
    setupDbConnection();
    swaggerConfig(app);
    await app.listen(ENVCONFIG.PORT);
}
bootstrap();
