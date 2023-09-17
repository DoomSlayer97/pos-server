import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuleModel } from "./module.model";
import { AccessUser } from "./accessuser.model";
import { BaseModel } from "./base.model";

@Entity()
export class ModuleAccess extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  defaultHasAccess: boolean;

  @ManyToOne(() => ModuleModel, (module) => module.moduleAccess)
  module: ModuleModel;

  @OneToMany(() => AccessUser, (accessUser) => accessUser.moduleAccess)
  accessUsers: AccessUser[];

}