import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateCategory1701090531372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema(ENUMS.DBSCHEMAS.SALE);
        await queryRunner.createSchema(ENUMS.DBSCHEMAS.USER);
        await queryRunner.createSchema(ENUMS.DBSCHEMAS.PRODUCT);
        await queryRunner.createSchema(ENUMS.DBSCHEMAS.MISC);
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.CATEGORY,
                schema: ENUMS.DBSCHEMAS.PRODUCT,
                columns: [
                   {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                   },
                   {
                    name: 'name',
                    type: 'varchar',
                   },
                   {
                        name: 'isDeleted',
                        type: 'smallint',
                        default: 0
                   },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {    
        await queryRunner.dropSchema(ENUMS.DBSCHEMAS.SALE);
        await queryRunner.dropSchema(ENUMS.DBSCHEMAS.USER);
        await queryRunner.dropSchema(ENUMS.DBSCHEMAS.PRODUCT);
        await queryRunner.dropSchema(ENUMS.DBSCHEMAS.MISC);
        await queryRunner.dropTable('categories');
    }

}
