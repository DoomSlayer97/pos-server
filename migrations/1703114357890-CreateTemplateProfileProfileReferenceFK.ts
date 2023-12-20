import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateTemplateProfileProfileReferenceFK1703114357890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'profiles',
            new TableForeignKey({
                columnNames: ['templateProfileId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'templateprofiles',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
