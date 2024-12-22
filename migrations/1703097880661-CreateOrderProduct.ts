import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateOrderProduct1703097880661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.ORDERPRODUCT,
                schema: ENUMS.DBSCHEMAS.SALE,
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
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
        await queryRunner.dropTable('orderproducts')
    }

}
