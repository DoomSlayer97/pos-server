import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class CreateModuleModuleAccessReferenceFK1703111638394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'moduleaccess',
            new TableForeignKey({
                columnNames: ['moduleId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'modules',
                onDelete: 'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
