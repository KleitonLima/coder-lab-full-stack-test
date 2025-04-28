import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, In } from 'typeorm';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async create(createProductDto: CreateProductDto) {
        const categories = await this.categoryRepository.find({
            where: { id: In(createProductDto.categories) },
        });

        const newProduct = this.productRepository.create({
            ...createProductDto,
            categories,
        });

        return this.productRepository.save(newProduct);
    }

    findAll() {
        return this.productRepository.find({ relations: ['categories'] });
    }

    findOne(id: number) {
        return `This action returns a #${id} product`;
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        const categories = await this.categoryRepository.find({
            where: { id: In(updateProductDto.categories) },
        });

        return this.productRepository.update(id, {
            ...updateProductDto,
            categories,
        });
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
