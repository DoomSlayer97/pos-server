import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "../../../models/profile.model"
import { ProfileService } from "./profile.service"
import { ProfileController } from "./profile.controller"
import { HelperModule } from "src/helpers/helper.module";
import { TemplateProfile } from "src/models/templateprofile.model";
import { ModuleModel } from "src/models/module.model";
import { AccessUser } from "src/models/accessuser.model";
import { ModuleAccess } from "src/models/moduleaccess.model";
import { User } from "src/models/user.model";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Profile,
      TemplateProfile,
      ModuleModel,
      AccessUser,
      ModuleAccess,
      User
    ]),
    HelperModule
  ],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}