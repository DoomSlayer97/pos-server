import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrder1703097400573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'amount',
                        type: 'decimal',
                        precision: 5,
                        scale: 2
                    },
                    {
                        name: 'total',
                        type: 'decimal',
                        precision: 5,
                        scale: 2
                    },
                    {
                        name: 'customerId',
                        type: 'int',
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
