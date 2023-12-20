import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateProfileUserReferenceFK1703114746232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                columnNames: ['profileId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'profiles',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
