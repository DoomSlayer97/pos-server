import { ENUMS } from "@types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const table = new Table({ 
    name: ENUMS.DBTABLES.ACCESSUSER, 
    schema: ENUMS.DBSCHEMAS.USER
});


export class CreateProfileAccessAccessUsersFK1734954333182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ['profileAccessId'],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ['id'],
                referencedTableName: ENUMS.DBTABLES.PROFILEACCESS,
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table,
            'profileAccessId'
        );
    }

}
