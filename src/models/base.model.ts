import { Column } from "typeorm";

export class BaseModel {
  
  @Column({ default: false })
  isDeleted: boolean;

}