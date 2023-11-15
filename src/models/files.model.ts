import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from '@classes'

@Entity()
export class FileModel extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  src: string;

}