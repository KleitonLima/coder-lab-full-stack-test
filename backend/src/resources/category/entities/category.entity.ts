import { IsString } from 'class-validator';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
