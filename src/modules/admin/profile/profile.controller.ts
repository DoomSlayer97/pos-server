import { Body, Controller, Get, Param, Post, Put, Res } from "@nestjs/common"
import { ProfileService } from "./profile.service"
import { Response } from "express"
import { HelperService } from "src/helpers/helper.service";

@Controller()
export class ProfileController {

  constructor(
    private readonly profileService: ProfileService,
    private readonly helperService: HelperService
  ) {}

  @Post('test')
  async generateDefaultProfile(
    @Res() res: Response
  ) {

    await this.profileService.generateProfile();

    return this.helperService.generateResponse(res, {
      code: 201,
      message: 'profile_generated',
      status: true,
      data: []
    });

  }

}