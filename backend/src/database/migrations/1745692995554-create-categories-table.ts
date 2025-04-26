import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoriesTable1745692995554 implements MigrationInterface {
    name = 'CreateCategoriesTable1745692995554';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "productId" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "categories" ADD CONSTRAINT "FK_40b29caafc0bbdf6d98a3ad2e41" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "categories" DROP CONSTRAINT "FK_40b29caafc0bbdf6d98a3ad2e41"`,
        );
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
