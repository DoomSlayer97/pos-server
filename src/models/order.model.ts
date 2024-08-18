import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { BaseModel } from '@classes'
import { OrderProduct } from "./orderproduct.model"
import { Customer } from "./customer.model"
import { ENUMS } from "@types"

export type OrderStatus = 'success' | 'progress' | 'failed'

@Entity({
  name: ENUMS.DBTABLES.ORDER
})
export class Order extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  status: OrderStatus;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'decimal' })
  total: number;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProduct: OrderProduct[];

  @ManyToOne(() => Customer, (customer) => customer.orders) 
  customer: Customer;

}