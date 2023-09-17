import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.model";
import { ModuleModel } from "./module.model";
import { BaseModel } from "./base.model";

@Entity()
export class TemplateProfile extends BaseModel {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @OneToMany(() => Profile, (profile) => profile.templateProfile)
  profiles: Profile[];

  @OneToMany(() => ModuleModel, (module) => module.templateProfile)
  modules: ModuleModel;

}