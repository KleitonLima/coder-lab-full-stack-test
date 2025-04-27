import { IsInt, IsString, IsDecimal } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsInt()
    qty: number;

    @IsDecimal()
    price: number;

    @IsString()
    photo: string;

    @IsString({ each: true })
    categories: string[]; // Assuming categories are passed as an array of strings (IDs or names)
}
