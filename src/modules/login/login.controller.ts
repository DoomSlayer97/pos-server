import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { LoginService } from "./login.service";
import { HelperService } from "src/helpers/helper.service";
import { AuthLoginDto } from "./dto/login.dto";
import { Response } from "express";

@Controller('login')
export class LoginController {

  constructor (
    private readonly loginService: LoginService,
    private readonly helperService: HelperService
  ) {}

  @Post('/auth')
  @HttpCode(200)
  async auth(
    @Body() dto: AuthLoginDto
  ) {

    const token = await this.loginService.auth(dto);

    return this.helperService.setResponse({
      message: 'authenticated',
      status: true,
      data: { token }
    });
    
  }

}