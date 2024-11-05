import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from "../../../models/customer.model";
import { HelperModule } from "src/helpers/helper.module"

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    HelperModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {};