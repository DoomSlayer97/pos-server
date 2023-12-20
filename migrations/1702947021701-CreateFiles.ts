import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFiles1702947021701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'files',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'filename',
                        type: 'varchar',
                    },
                    {
                        name: 'src',
                        type: 'varchar',
                    },

                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
