import { BaseModel } from '@classes'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.model";

@Entity()
export class ProductProvider extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  number: string;
  
  @Column()
  email: string;

  @OneToMany(() => Product, (product) => product.provider)
  products: Product[];

}