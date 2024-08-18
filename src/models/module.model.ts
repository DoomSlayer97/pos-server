import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TemplateProfile } from "./templateprofile.model";
import { ModuleAccess } from "./moduleaccess.model";
import { BaseModel } from '@classes'
import { ENUMS } from "@types"


@Entity({
  name: ENUMS.DBTABLES.MODULE
})
export class ModuleModel extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => TemplateProfile, (templateProfile) => templateProfile.modules)
  templateProfile: TemplateProfile;

  @OneToMany(() => ModuleAccess, (moduleAccess) => moduleAccess.module)
  moduleAccess: ModuleAccess[];

}