import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationTables1745806085090 implements MigrationInterface {
    name = 'RelationTables1745806085090';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "products_categories_categories" ("productsId" uuid NOT NULL, "categoriesId" uuid NOT NULL, CONSTRAINT "PK_8fd95511a998d598ff66d500933" PRIMARY KEY ("productsId", "categoriesId"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_40e7da0284a5389344605de8da" ON "products_categories_categories" ("productsId") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_e1d833224b5be535323207473f" ON "products_categories_categories" ("categoriesId") `,
        );
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "photo"`);
        await queryRunner.query(
            `ALTER TABLE "products" ADD "photo" text NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "products_categories_categories" ADD CONSTRAINT "FK_40e7da0284a5389344605de8dab" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "products_categories_categories" ADD CONSTRAINT "FK_e1d833224b5be535323207473f1" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "products_categories_categories" DROP CONSTRAINT "FK_e1d833224b5be535323207473f1"`,
        );
        await queryRunner.query(
            `ALTER TABLE "products_categories_categories" DROP CONSTRAINT "FK_40e7da0284a5389344605de8dab"`,
        );
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "photo"`);
        await queryRunner.query(
            `ALTER TABLE "products" ADD "photo" character varying(2000) NOT NULL`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_e1d833224b5be535323207473f"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_40e7da0284a5389344605de8da"`,
        );
        await queryRunner.query(`DROP TABLE "products_categories_categories"`);
    }
}
