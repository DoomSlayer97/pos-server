import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.model";
import { BaseModel } from '@classes'


@Entity()
export class Customer extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

}