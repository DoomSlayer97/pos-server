import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Profile } from "src/models/profile.model"
import { Repository } from "typeorm"
import { TemplateProfile } from "src/models/templateprofile.model"
import { ModuleModel } from "src/models/module.model"
import { ModuleAccess } from "src/models/moduleaccess.model"
import { AccessUser } from "src/models/accessuser.model"


@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(TemplateProfile)
    private readonly templateProfileRepository: Repository<TemplateProfile>,
    @InjectRepository(ModuleModel)
    private readonly moduleRepository: Repository<ModuleModel>,
    @InjectRepository(ModuleAccess)
    private readonly moduleAccessRepository: Repository<ModuleAccess>,
    @InjectRepository(AccessUser)
    private readonly accessUserRepository: Repository<AccessUser>
  ) {}

  async generateProfile() {

    const newTemplateProfile = new TemplateProfile();

    newTemplateProfile.name = "Admin";

    const createdTemplateProfile = await this.templateProfileRepository.save(newTemplateProfile);

    const newModule = new ModuleModel()

    newModule.name = "Products";
    newModule.templateProfile = newTemplateProfile;

    const createdModule = await this.moduleRepository.save(newModule);

    const accessList = ['create', 'update', 'view', 'delete'];
    const moduleAccessList: ModuleAccess[] = [];

    accessList.forEach( item => {

      const tempModuleAccess = new ModuleAccess();

      tempModuleAccess.name = item;
      tempModuleAccess.defaultHasAccess = true;
      tempModuleAccess.module = createdModule;

      moduleAccessList.push(tempModuleAccess);

    });
  
    await this.moduleAccessRepository.save(moduleAccessList);

    const newProfile = new Profile();

    newProfile.name = "Admin";
    newProfile.templateProfile = createdTemplateProfile;

    await this.profileRepository.save(newProfile);

  }

}