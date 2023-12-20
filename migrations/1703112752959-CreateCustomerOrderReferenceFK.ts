import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateCustomerOrderReferenceFK1703112752959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['customerId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'customers',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
