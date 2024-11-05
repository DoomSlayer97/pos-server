import { Module } from "@nestjs/common"
import { OrderController } from "./order.controller"
import { OrderService } from "./order.service"
import { TypeOrmModule,  } from "@nestjs/typeorm"
import { Order } from "src/models/order.model"
import { Product } from "src/models/product.model"
import { OrderProduct } from "src/models/orderproduct.model"
import { Customer } from "src/models/customer.model"
import { DataSource } from "typeorm"
import { HelperModule } from "src/helpers/helper.module"

@Module({ 
  imports: [
    TypeOrmModule.forFeature([
      Order, 
      Product, 
      OrderProduct,
      Customer,
    ]),
    HelperModule,
  ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}