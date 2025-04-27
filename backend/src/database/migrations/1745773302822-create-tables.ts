import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1745773302822 implements MigrationInterface {
    name = 'CreateTables1745773302822';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "parentId" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "qty" integer NOT NULL, "price" numeric(10,2) NOT NULL, "photo" character varying(2000) NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "categories" ADD CONSTRAINT "FK_9a6f051e66982b5f0318981bcaa" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "categories" DROP CONSTRAINT "FK_9a6f051e66982b5f0318981bcaa"`,
        );
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
