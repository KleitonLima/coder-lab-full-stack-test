import { IsInt, IsString, IsArray, IsUUID, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsInt()
    qty: number;

    @IsNumber()
    price: number;

    @IsString()
    photo: string;

    @IsArray()
    @IsUUID('4', { each: true })
    categories: string[];
}
