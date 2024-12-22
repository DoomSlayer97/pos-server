import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.USER, 
    schema: ENUMS.DBSCHEMAS.USER
});

export class CreateProfileUserReferenceFK1703114746232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['profileId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.PROFILE,
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'profileId'
        );
    }

}
