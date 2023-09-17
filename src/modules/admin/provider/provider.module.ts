import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelperModule } from "src/helpers/helper.module";
import { ProductProvider } from "src/models/productprovider.model";
import { ProviderController } from "./provider.controller";
import { ProviderService } from "./provider.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductProvider]),
    HelperModule,
  ],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}