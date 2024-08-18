import { BaseModel } from '@classes'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Profile } from './profile.model'
import { AccessUser } from './accessuser.model'
import { ENUMS } from "@types"


@Entity({
  name: ENUMS.DBTABLES.USER
})
export class User extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  status: string;

  @ManyToOne(() => Profile, (profile) => profile.users)
  profile: Profile;

  @OneToMany(() => AccessUser, (accessUser) => accessUser.user)
  accessUsers: AccessUser[];

}
