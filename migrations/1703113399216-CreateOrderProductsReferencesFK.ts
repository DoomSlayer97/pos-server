import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateOrderProductsReferencesFK1703113399216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createForeignKey(
            'orderproducts',
            new TableForeignKey({
                columnNames: ['orderId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'orders',
                onDelete: 'CASCADE'
            })
        )

        await queryRunner.createForeignKey(
            'orderproducts',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products',
                onDelete: 'CASCADE'
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
