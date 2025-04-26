import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryController } from './categories.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
