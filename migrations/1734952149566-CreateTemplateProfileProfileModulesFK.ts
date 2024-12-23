import { ENUMS } from "@types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const table = new Table({ 
    name: ENUMS.DBTABLES.PROFILEMODULE, 
    schema: ENUMS.DBSCHEMAS.USER
});


export class CreateTemplateProfileProfileModulesFK1734952149566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['profileModuleId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.TEMPLATEPROFILE,
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table,
            'profileModuleId'
        );
    }

}
