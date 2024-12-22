import { MigrationInterface, QueryRunner, TableForeignKey, Table } from "typeorm"
import { ENUMS } from "@types"

const table = new Table({ 
    name: ENUMS.DBTABLES.ACCESSUSER, 
    schema: ENUMS.DBSCHEMAS.USER 
});
    
export class CreateUserAccessUserReferenceFK1703109309777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            table,
            new TableForeignKey({
                columnNames: ["userId"],
                referencedSchema: ENUMS.DBSCHEMAS.USER,
                referencedColumnNames: ["id"],
                referencedTableName: ENUMS.DBTABLES.USER,
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            table, 
            'userId'
        );
    }

}
