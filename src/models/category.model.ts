import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.model";
import { BaseModel } from '@classes'
import { ENUMS } from "@types"

@Entity({ 
  name: ENUMS.DBTABLES.CATEGORY,
})
export class Category extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @OneToMany(() => Product, (product) => product.category)
  products: Product;  

}