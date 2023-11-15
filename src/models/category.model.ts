import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.model";
import { BaseModel } from '@classes'

@Entity()
export class Category extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @OneToMany(() => Product, (product) => product.category)
  products: Product;  

}