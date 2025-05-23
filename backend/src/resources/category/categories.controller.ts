import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }
}
