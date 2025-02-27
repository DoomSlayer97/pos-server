import { MigrationInterface, QueryRunner } from "typeorm"
import { ENUMS } from "@types"

export class CreateFNCreateProducts1740662884553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create or replace function ${ENUMS.DBSCHEMAS.PRODUCT}.${ENUMS.DBVOIDFUNCTIONS.CREATE_PRODUCT}(
                p_name varchar,
                p_price decimal,
                p_stock integer,
                p_status varchar,
                p_category varchar,
                p_provider varchar
            ) returns void as $$
            declare
                category_id integer;
                provider_id integer;
                generated_sku text;
            begin
                SELECT id into category_id
                from products.categories pc
                where pc.name = p_category;

                if category_id is null then
                    raise exception 'La categoria % no existe', p_category;
                end if;

                SELECT id into provider_id
                from products.productproviders pp
                where pp.name = p_provider;

                if provider_id is null then
                    raise exception 'El proveedor % no existe', p_provider;
                end if;

                generated_sku := products.generate_sku(p_name, p_category);

                insert into products.products (
                    name, 
                    sku, 
                    price, 
                    stock, 
                    status,
                    "categoryId",
                    "providerId"
                ) values (
                    p_name,
                    generated_sku,
                    p_price,
                    p_stock,
                    p_status,
                    category_id,
                    provider_id
                );
            end $$ language plpgsql;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete function ${ENUMS.DBSCHEMAS.PRODUCT}.${ENUMS.DBVOIDFUNCTIONS.CREATE_PRODUCT}`);
    }

}
