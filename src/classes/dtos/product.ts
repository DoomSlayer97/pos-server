import { IsNotEmpty } from "class-validator";
import { ProductStatus } from "src/models/product.model";

export class CreateProductDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  status: ProductStatus;

  @IsNotEmpty()
  providerId: number;

}

export class UpdateProductDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  status: ProductStatus;

  @IsNotEmpty()
  providerId: number;
  
}