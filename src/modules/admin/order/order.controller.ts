import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderProductDto } from "src/classes/dtos/order.dto";
import { HelperService } from "src/helpers/helper.service";

@Controller()
export class OrderController {

  constructor(
    private readonly orderService: OrderService,
    private readonly helperService: HelperService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: CreateOrderProductDto
  ) {
    const created = await this.orderService.create(dto);

    return this.helperService.setResponse({
      status: true,
      data: created,
      message: 'stored_order'
    })
    
  }

}