import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product } from "src/models/product.model"
import { ProductService } from "./product.service"
import { ProductController } from "./product.controller"
import { HelperModule } from "src/helpers/helper.module"
import { Category } from "src/models/category.model"
import { ProductProvider } from "src/models/productprovider.model"

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category, ProductProvider]),
    HelperModule,
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}