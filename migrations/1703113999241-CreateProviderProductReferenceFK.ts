import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateProviderProductReferenceFK1703113999241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'products',
            new TableForeignKey({
                columnNames: ['providerId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'productproviders',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
