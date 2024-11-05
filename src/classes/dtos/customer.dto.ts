import { IsNotEmpty } from "class-validator";

export class CreateCustomerDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  email: string;  

}

export class UpdateCustomerDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  email: string;  

}

