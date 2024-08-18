import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from '@classes'
import { ENUMS } from "@types"

@Entity({
  name: ENUMS.DBTABLES.FILES
})
export class FileModel extends BaseModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  src: string;

}