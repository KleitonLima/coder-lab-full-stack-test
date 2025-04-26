import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDbConnection } from './config/connection.db';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
    setupDbConnection();
}
bootstrap();
