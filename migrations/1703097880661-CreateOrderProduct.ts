import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateOrderProduct1703097880661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.ORDERPRODUCT,
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
