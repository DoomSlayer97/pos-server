import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateModules1702949130643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.MODULE,
                schema: ENUMS.DBSCHEMAS.USER,
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
                        name: 'templateProfileId',
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
        await queryRunner.dropTable('modules');
    }

}
