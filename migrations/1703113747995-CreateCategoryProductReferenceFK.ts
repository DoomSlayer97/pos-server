import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.PRODUCT, 
    schema: ENUMS.DBSCHEMAS.PRODUCT 
});

export class CreateCategoryProductReferenceFK1703113747995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['categoryId'],
                referencedSchema: ENUMS.DBSCHEMAS.PRODUCT,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.CATEGORY,
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'categoryId'
        );
    }

}
