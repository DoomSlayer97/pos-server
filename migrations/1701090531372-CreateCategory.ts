import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { ENUMS } from "@types"


export class CreateCategory1701090531372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ENUMS.DBTABLES.CATEGORY,
                columns: [
                   {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                   },
                   {
                    name: 'name',
                    type: 'varchar',
                   },
                   {
                        name: 'isDeleted',
                        type: 'tinyint',
                        default: 0
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
