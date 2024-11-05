import { IsNotEmpty } from "class-validator";

class IProductsId {
  id: number;
  quantity: number;
}

export class CreateOrderProductDto {
  
  @IsNotEmpty()
  productsId: IProductsId[];

  @IsNotEmpty()
  customerId: number;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  total: number;

}