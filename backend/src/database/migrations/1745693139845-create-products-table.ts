import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsTable1745693139845 implements MigrationInterface {
    name = 'CreateProductsTable1745693139845';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "qty" integer NOT NULL, "price" numeric(10,2) NOT NULL, "photo" character varying(2000) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }
}
