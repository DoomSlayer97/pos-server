import { Module,  } from "@nestjs/common"
import { UserModule } from "./user/user.module"
import { ProfileModule } from "./profile/profile.module"
import { ProductModule } from "./product/product.module"
import { CategoryModule } from "./category/category.module"
import { ProviderModule } from "./provider/provider.module"
import { RouterModule } from "@nestjs/core"

@Module({
  imports: [
    UserModule,
    ProfileModule,
    ProductModule,
    ProviderModule,
    CategoryModule,
    RouterModule.register([
      {
        path: 'admin/users',
        module: UserModule
      }, 
      {
        path: 'admin/profiles',
        module: ProfileModule
      },
      {
        path: 'admin/products',
        module: ProductModule
      },
      {
        path: 'admin/categories',
        module: CategoryModule
      },
      {
        path: 'admin/providers',
        module: ProviderModule
      },
    ])
  ],
})
export class AdminModule {}

