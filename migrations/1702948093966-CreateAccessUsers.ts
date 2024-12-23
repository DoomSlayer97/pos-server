import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"

export class CreateAccessUsers1702948093966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.ACCESSUSER,
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
                        name: 'hasAccess',
                        type: 'smallint',
                    },
                    {
                        name: 'userId',
                        type: 'int',
                    },
                    {
                        name: 'profileAccessId',
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
        await queryRunner.dropTable('accessusers');
    }

}
