import { MigrationInterface, QueryRunner } from "typeorm"
import { ENUMS } from "@types"

export class CreateFNGenerateSku1740668770415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION ${ENUMS.DBSCHEMAS.PRODUCT}.${ENUMS.DBFUNCTIONS.GENERATE_SKU}(name text, category text)
            RETURNS text
            LANGUAGE plpgsql
            AS $function$
            DECLARE
                sku TEXT;
            BEGIN
                -- Generar el SKU
                sku := UPPER(SUBSTRING(category FROM 1 FOR 3)) || '-' || 
                    UPPER(SUBSTRING(name FROM 1 FOR 3)) || '-' || 
                    LEFT(MD5(RANDOM()::TEXT), 5);  -- Genera 5 caracteres aleatorios

                RETURN sku;
            END;
            $function$
            ;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete FUNCTION ${ENUMS.DBSCHEMAS.PRODUCT}.${ENUMS.DBFUNCTIONS.GENERATE_SKU}`);
    }

}
