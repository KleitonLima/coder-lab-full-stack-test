import { Category } from 'src/resources/category/entities/category.entity';
import { QueryRunner } from 'typeorm';

export const CategoriesPopulate20250429094943Seed = {
    name: 'CategoriesPopulate20250429094943',
    async up(queryRunner: QueryRunner): Promise<any> {
        const categories = [
            {
                name: 'Headphones',
            },
            {
                name: 'Headsets',
            },
            {
                name: 'Earbuds',
            },
            {
                name: 'Speakers',
            },
            {
                name: 'Microphones',
            },
        ];

        const categoryRepository =
            queryRunner.connection.getRepository(Category);

        await categoryRepository.insert(
            categories.map((category) => ({
                name: category.name,
            })),
        );
    },
};
