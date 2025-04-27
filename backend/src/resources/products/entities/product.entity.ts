import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'int' })
    qty: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'text' })
    photo: string;

    @ManyToMany(() => Category, (category) => category.products)
    categories: Category[];
}
