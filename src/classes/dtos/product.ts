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
  category: number;

  @IsNotEmpty()
  status: ProductStatus;

  @IsNotEmpty()
  provider: number;

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
  category: number;

  @IsNotEmpty()
  status: ProductStatus;

  @IsNotEmpty()
  provider: number;
  
}