import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategory1701090531372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                   {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                   },
                   {
                    name: 'name',
                    type: 'varchar',
                   },
                   {
                    name: 'isDeleted',
                    type: 'tinyint',
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
