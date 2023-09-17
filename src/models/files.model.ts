import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.model";

@Entity()
export class FileModel extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  src: string;

}