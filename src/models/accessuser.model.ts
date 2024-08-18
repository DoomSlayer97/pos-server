import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";
import { ModuleAccess } from "./moduleaccess.model";
import { ENUMS } from "@types"

@Entity({
  name: ENUMS.DBTABLES.ACCESSUSER
})
export class AccessUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hasAccess: boolean;

  @ManyToOne(() => User, (user) => user.accessUsers)
  user: User;

  @ManyToOne(() => ModuleAccess, (moduleAccess) => moduleAccess.accessUsers)
  moduleAccess: ModuleAccess;

}