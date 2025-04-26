import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async findAll() {
        return await this.categoryRepository.find();
    }
}
