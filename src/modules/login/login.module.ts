import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelperModule } from "src/helpers/helper.module";
import { User } from "src/models/user.model";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    HelperModule
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}