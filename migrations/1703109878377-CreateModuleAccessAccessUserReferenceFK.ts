import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.ACCESSUSER, 
    schema: ENUMS.DBSCHEMAS.USER 
});

export class CreateModuleAccessAccessUserReferenceFK1703109878377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ["moduleAccessId"],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ["id"],
                referencedTableName: ENUMS.DBTABLES.MODULEACCESS,
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'moduleAccessId'
        );
    }

}
