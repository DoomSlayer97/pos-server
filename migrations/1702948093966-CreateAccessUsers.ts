import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAccessUsers1702948093966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'accessusers',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'hasAccess',
                        type: 'tinyint',
                    },
                    {
                        name: 'userId',
                        type: 'int',
                    },
                    {
                        name: 'moduleAccessId',
                        type: 'int',
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accessusers');
    }

}
