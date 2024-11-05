import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from '@classes';
import { HelperService } from 'src/helpers/helper.service';


@Controller()
export class CustomerController {

  constructor(
    private readonly customerService: CustomerService,
    private readonly helperService: HelperService
  ) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: CreateCustomerDto
  ) {
    const storedCustomer = await this.customerService.create(dto);

    return this.helperService.setResponse({
      status: true,
      data: storedCustomer,
      message: 'stored_customer'
    })
  }
   
  @Get()
  @HttpCode(200)
  async findAll() {
    const customers = await this.customerService.findAll();

    return this.helperService.setResponse({
      status: true,
      data: customers,
      message: 'finded_customers'
    })
  }
  
}