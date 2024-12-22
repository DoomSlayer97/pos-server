import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateProduct1703098422307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.PRODUCT,
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
                        name: 'sku',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        precision: 5,
                        scale: 2
                    },
                    {
                        name: 'stock',
                        type: 'int',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'categoryId',
                        type: 'int',
                    },
                    {
                        name: 'providerId',
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
        await queryRunner.dropTable('products')
    }

}
