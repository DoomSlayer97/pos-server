import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"

export class CreateFiles1702947021701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.FILES,
                schema: ENUMS.DBSCHEMAS.MISC,
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'filename',
                        type: 'varchar',
                    },
                    {
                        name: 'src',
                        type: 'varchar',
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
        await queryRunner.dropTable('categories');
    }

}
