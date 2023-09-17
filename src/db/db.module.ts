import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.model';
import { Profile } from '../models/profile.model';
import { TemplateProfile } from 'src/models/templateprofile.model';
import { ModuleModel } from 'src/models/module.model';
import { ModuleAccess } from 'src/models/moduleaccess.model';
import { AccessUser } from 'src/models/accessuser.model';
import { Product } from 'src/models/product.model';
import { Category } from 'src/models/category.model';
import { ProductProvider } from 'src/models/productprovider.model';
import { FileModel } from 'src/models/files.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      password: '123456',
      database: 'db_pos',
      username: 'root',
      entities: [
        User,
        Profile,
        TemplateProfile,
        ModuleModel,
        ModuleAccess,
        AccessUser,
        Product,
        Category,
        ProductProvider,
        FileModel
      ],
      synchronize: true
    })
  ]
})
export class DbModule {}