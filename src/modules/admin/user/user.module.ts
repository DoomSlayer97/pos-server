import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { User } from '../../../models/user.model'
import { HelperModule } from '../../../helpers/helper.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    HelperModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}