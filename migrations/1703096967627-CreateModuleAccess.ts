import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateModuleAccess1703096967627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.MODULEACCESS,
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
                        name: 'defaultHasAccess',
                        type: 'tinyint',
                    },
                    {
                        name: 'moduleId',
                        type: 'int',
                    },
                    {
                        name: 'isDeleted',
                        type: 'tinyint',
                        default: 0
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
