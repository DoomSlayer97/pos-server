import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateModuleAccessAccessUserReferenceFK1703109878377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "accessusers",
            new TableForeignKey({
                columnNames: ["moduleAccessId"],
                referencedColumnNames: ["id"],
                referencedTableName: "moduleaccess",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
