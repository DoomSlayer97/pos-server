import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateModuleAccess1703096967627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'moduleaccess',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'defaultHasAccess',
                        type: 'tinyint',
                    },
                    {
                        name: 'moduleId',
                        type: 'int',
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('moduleaccess');
    }

}
