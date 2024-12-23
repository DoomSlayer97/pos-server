import { ENUMS } from "@types"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProfileAccess1734843952872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.PROFILEACCESS,
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
                        name: 'profileModuleId',
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
        await queryRunner.dropTable(new Table({ schema: ENUMS.DBSCHEMAS.USER, name: ENUMS.DBTABLES.PROFILEACCESS }));
    }

}
