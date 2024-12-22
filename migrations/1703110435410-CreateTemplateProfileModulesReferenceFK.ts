import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.MODULE, 
    schema: ENUMS.DBSCHEMAS.USER 
});

export class CreateTemplateProfileModulesReferenceFK1703110435410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['templateProfileId'],
                referencedSchema:  ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.TEMPLATEPROFILE,
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'templateProfileId'
        );
    }

}
