import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.ORDER, 
    schema: ENUMS.DBSCHEMAS.SALE 
});


export class CreateCustomerOrderReferenceFK1703112752959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['customerId'],
                referencedSchema: ENUMS.DBSCHEMAS.SALE,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.CUSTOMER,
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'customerId'
        );
    }

}
