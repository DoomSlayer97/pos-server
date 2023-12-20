import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrderProduct1703097880661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orderproducts',
                columns: [
                    {
                        name: 'quantity',
                        type: 'int',
                    },
                    {
                        name: 'orderId',
                        type: 'int',
                    },
                    {
                        name: 'productId',
                        type: 'int',
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orderproducts')
    }

}
