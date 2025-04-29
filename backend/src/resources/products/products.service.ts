import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository, In, ILike } from 'typeorm';
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

    findAll(search: string) {
        if (search) {
            return this.productRepository.find({
                where: { name: ILike(`%${search}%`) },
            });
        }
        return this.productRepository.find();
    }

    async findOne(id: string) {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['categories'],
            select: {
                categories: {
                    id: true,
                },
            },
        });

        if (!product) {
            throw new Error('Produto não encontrado!');
        }

        return {
            ...product,
            categories: product.categories.map((category) => category.id),
        };
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['categories'],
        });
        if (!product) {
            throw new Error('Produto não encontrado!');
        }

        const categories = await this.categoryRepository.find({
            where: { id: In(updateProductDto.categories) },
        });

        Object.assign(product, { ...updateProductDto, categories });

        return this.productRepository.save(product);
    }

    remove(id: string) {
        return this.productRepository.delete(id);
    }
}
