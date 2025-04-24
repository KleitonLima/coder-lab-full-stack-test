import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    findAll() {
        return `This action returns all category`;
    }
}
