import { IsInt, IsString, IsDecimal, IsArray, IsUUID } from 'class-validator';
import { Category } from 'src/resources/category/entities/category.entity';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsInt()
    qty: number;

    @IsDecimal()
    price: number;

    @IsString()
    photo: string;

    @IsArray()
    @IsUUID('4', { each: true })
    categories: Category[];
}
