import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationProductsCategories1745766322213
    implements MigrationInterface
{
    name = 'CreateRelationProductsCategories1745766322213';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "categories_products" ("categoriesId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_df11914ffb834bdef013f7e660e" PRIMARY KEY ("categoriesId", "productsId"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_dcbd028e554a81deb0a89cc3e8" ON "categories_products" ("categoriesId") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_b5a4476a30f188bf0d672b985b" ON "categories_products" ("productsId") `,
        );
        await queryRunner.query(
            `ALTER TABLE "categories_products" ADD CONSTRAINT "FK_dcbd028e554a81deb0a89cc3e8a" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "categories_products" ADD CONSTRAINT "FK_b5a4476a30f188bf0d672b985b7" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "categories_products" DROP CONSTRAINT "FK_b5a4476a30f188bf0d672b985b7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "categories_products" DROP CONSTRAINT "FK_dcbd028e554a81deb0a89cc3e8a"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_b5a4476a30f188bf0d672b985b"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_dcbd028e554a81deb0a89cc3e8"`,
        );
        await queryRunner.query(`DROP TABLE "categories_products"`);
    }
}
