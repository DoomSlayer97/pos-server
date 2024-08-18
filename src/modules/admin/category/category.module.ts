import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../../../models/category.model"
import { HelperModule } from "src/helpers/helper.module"
import { CategoryController } from "./category.controller"
import { CategoryService } from "./category.service"

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    HelperModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}