import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderService {

  constructor(
    private readonly product
  ) {}
 

}