import { BaseModel } from '@classes'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './user.model'
import { TemplateProfile } from './templateprofile.model'
import { ENUMS } from "@types"


@Entity({
  name: ENUMS.DBTABLES.PROFILE
})
export class Profile extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isCustom: boolean;

  @ManyToOne(() => TemplateProfile, (TemplateProfile) => TemplateProfile.profiles)
  templateProfile: TemplateProfile;

  @OneToMany(() => User, (user) => user.profile)
  users: User[];

}