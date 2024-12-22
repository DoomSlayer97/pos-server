import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.ORDERPRODUCT, 
    schema: ENUMS.DBSCHEMAS.SALE 
});

export class CreateOrderProductsReferencesFK1703113399216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['orderId'],
                referencedSchema: ENUMS.DBSCHEMAS.SALE,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.ORDER,
                onDelete: 'CASCADE'
            })
        )

        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['productId'],
                referencedSchema: ENUMS.DBSCHEMAS.PRODUCT,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.PRODUCT,
                onDelete: 'CASCADE'
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'orderId'
        );
        await queryRunner.dropForeignKey(
            table, 
            'productId'
        );
    }

}
