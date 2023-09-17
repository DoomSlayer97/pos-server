import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Profile } from './profile.model';
import { AccessUser } from './accessuser.model';
import { BaseModel } from './base.model';

@Entity()
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

  @ManyToOne(() => Profile, (profile) => profile.users)
  profile: Profile;

  @OneToMany(() => AccessUser, (accessUser) => accessUser.user)
  accessUsers: AccessUser[];

}
