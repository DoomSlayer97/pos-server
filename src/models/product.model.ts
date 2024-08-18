import { BaseModel } from '@classes'
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./category.model"
import { ProductProvider } from "./productprovider.model"
import { OrderProduct } from "./orderproduct.model"
import { ENUMS } from "@types"

export type ProductStatus = 
  | 'available'
  | 'not_avilable'
  | 'sold_out';

@Entity({
  name: ENUMS.DBTABLES.PRODUCT
})
export class Product extends BaseModel {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @Column({ type: 'varchar' })
  status: ProductStatus;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
  
  @ManyToOne(() => ProductProvider, (provider) => provider.products)
  provider: ProductProvider;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProduct: OrderProduct[];

}