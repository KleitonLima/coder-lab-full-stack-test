import { IsString } from 'class-validator';
import { Product } from '../../products/entities/product.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Category, (category) => category.parent, { nullable: true })
    parent: Category | null;

    @IsString()
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @ManyToOne(() => Product, (product) => product.categories, {
        cascade: true,
    })
    product: Product;
}
