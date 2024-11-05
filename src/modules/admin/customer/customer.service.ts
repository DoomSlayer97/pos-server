import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from "../../../models/customer.model";
import { CreateCustomerDto } from "../../../classes/dtos";

@Injectable()
export class CustomerService {
  
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  async create(dto: CreateCustomerDto) {
    const newCustomer = new Customer();

    newCustomer.name = dto.name;
    newCustomer.email = dto.email;
    newCustomer.phone = dto.phone;

    return this.customerRepository.save(newCustomer);
  }

  async findAll() {
    const customers = await this.customerRepository.find();

    if ( customers.length <= 0 )
      throw new HttpException("customers_not_found", HttpStatus.NOT_FOUND);

    return customers;
  }
  
}