import { IsNotEmpty } from "class-validator";

export class CreateProviderDto {
  
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  email: string;

}

export class UpdateProviderDto {
  
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  number: string;
  
  @IsNotEmpty()
  email: string;
  
}
