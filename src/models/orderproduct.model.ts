import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from '@classes'

import { Order } from "./order.model";
import { Product } from "./product.model";

@Entity()
export class OrderProduct extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.orderProduct)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderProduct)
  product: Product;

}