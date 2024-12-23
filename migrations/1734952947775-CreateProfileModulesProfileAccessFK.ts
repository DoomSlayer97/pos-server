import { ENUMS } from "@types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const table = new Table({ 
    name: ENUMS.DBTABLES.PROFILEACCESS, 
    schema: ENUMS.DBSCHEMAS.USER
});

export class CreateProfileModulesProfileAccessFK1734952947775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['profileModuleId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.PROFILEMODULE,
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
