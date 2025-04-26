import { IsInt, IsNumber, IsString } from 'class-validator';
import { Category } from 'src/resources/category/entities/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsString({ each: true })
    @Column({ type: 'simple-array' })
    categories_id: string[];

    @OneToMany(() => Category, (category) => category)
    categories: Category[];

    @IsString()
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @IsInt()
    @Column({ type: 'int' })
    qty: number;

    @IsNumber()
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @IsString()
    @Column({ type: 'varchar', length: 2000 })
    photo: string;
}
