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
  category: string;

  @IsNotEmpty()
  status: ProductStatus;

  @IsNotEmpty()
  provider: string;

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