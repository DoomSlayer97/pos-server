import { Injectable } from "@nestjs/common"
import { Response } from "express"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { ResponseParams, ResponseProps } from "./interfaces/helper.interfaces"

@Injectable()
export class HelperService {

  hashPassword(password: string): string {

    return bcrypt.hashSync(password, 12);

  }
  
  checkPassword(textPassword: string, dbPassword: string): boolean {

    return bcrypt.compareSync(textPassword, dbPassword);

  }

  createjwtToken(data: any): string {

    return jwt.sign(data, "asfrqwrqwrasr12", { expiresIn: '1d' });

  }

  setResponse(params: ResponseProps) {

    return params;

  }

  generateResponse(res: Response, params: ResponseParams) {

    return res
      .status(params.code)
      .json({
          data: params.data,
          message: params.message,
          status: params.status,
          errors: params.errors || undefined
      });

  }

  generateErrorResponse(res: Response, params: { code?: number, message: string }) {
    
    return res
      .status(params.code || 400)
      .json({
        message: params.message,
        status: false,
      })

  }

}