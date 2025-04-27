import { IsString } from 'class-validator';
import { Product } from '../../products/entities/product.entity';
import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Category, (category) => category.children, {
        nullable: true,
    })
    parent: Category | null;

    @IsString()
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @OneToMany(() => Category, (category) => category.parent)
    children: Category[];

    @ManyToMany(() => Product, (product) => product.categories)
    products: Product[];
}
