import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './resources/products/products.module';
import { CategoryModule } from './resources/category/categories.module';
import { AppDataSource } from './config/typeorm.db';

@Module({
    imports: [
        ProductsModule,
        CategoryModule,
        TypeOrmModule.forRoot(AppDataSource.options),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
