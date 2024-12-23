import { ENUMS } from "@types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const table = new Table({ 
    name: ENUMS.DBTABLES.PROFILEACCESS, 
    schema: ENUMS.DBSCHEMAS.USER
});

export class CreateModuleAccessProfileAccessFK1734953357003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['moduleAccessId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.MODULEACCESS,
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table,
            'moduleAccessId'
        );
    }

}
