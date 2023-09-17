import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.model";
import { BaseModel } from "./base.model";
import { ProductProvider } from "./productprovider.model";

export type ProductStatus = 
  | 'available'
  | 'not_avilable'
  | 'sold_out';

@Entity()
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

}