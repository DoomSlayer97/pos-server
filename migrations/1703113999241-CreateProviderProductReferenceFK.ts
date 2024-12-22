import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.PRODUCT, 
    schema: ENUMS.DBSCHEMAS.PRODUCT 
});

export class CreateProviderProductReferenceFK1703113999241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['providerId'],
                referencedSchema: ENUMS.DBSCHEMAS.PRODUCT,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.PRODUCTPROVIDER,
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'providerId'
        );
    }

}
