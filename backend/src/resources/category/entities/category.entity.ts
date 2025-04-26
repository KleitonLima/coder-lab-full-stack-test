import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Category || null, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    parent: Category | null;

    @IsString()
    @Column({ type: 'varchar', length: 255 })
    name: string;
}
