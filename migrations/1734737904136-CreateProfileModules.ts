import { ENUMS } from "@types"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProfileModules1734737904136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.PROFILEMODULE,
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
                        name: 'templateProfileId',
                        type: 'int',
                    },
                    {
                        name: 'moduleId',
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
        await queryRunner.dropTable(new Table({ schema: ENUMS.DBSCHEMAS.USER, name: ENUMS.DBTABLES.PROFILEMODULE }));
    }

}
