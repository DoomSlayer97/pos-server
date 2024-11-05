import { Module,  } from "@nestjs/common"
import { UserModule } from "./user/user.module"
import { ProfileModule } from "./profile/profile.module"
import { ProductModule } from "./product/product.module"
import { CategoryModule } from "./category/category.module"
import { ProviderModule } from "./provider/provider.module"
import { CustomerModule } from "./customer/customer.module"
import { OrderModule } from "./order/order.module"
import { RouterModule } from "@nestjs/core"

@Module({
  imports: [
    UserModule,
    ProfileModule,
    ProductModule,
    ProviderModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
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
      {
        path: 'admin/customers',
        module: CustomerModule
      },
      {
        path: 'admin/orders',
        module: OrderModule
      },
    ])
  ],
})
export class AdminModule {}

