import { ENUMS } from "@types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const table = new Table({ 
    name: ENUMS.DBTABLES.PROFILEMODULE, 
    schema: ENUMS.DBSCHEMAS.USER
});

export class CreateModulesProfileModulesFK1734952570242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['moduleId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.MODULE,
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table,
            'moduleId'
        );
    }

}
