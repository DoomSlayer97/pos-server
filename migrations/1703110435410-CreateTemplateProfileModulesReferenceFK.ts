import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateTemplateProfileModulesReferenceFK1703110435410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'modules',
            new TableForeignKey({
                columnNames: ['templateProfileId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'templateprofiles',
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
