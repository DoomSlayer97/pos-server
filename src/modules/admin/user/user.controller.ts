import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, AuthUserDto, ChangePasswordUserDto } from '@classes';
import { Response } from 'express';
import { UserService } from './user.service';
import { HelperService } from '../../../helpers/helper.service'


@Controller()
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly helperService: HelperService
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response
  ) {

    const createdUser = await this.userService.create(createUserDto);

    delete createdUser.password;

    return this.helperService.generateResponse(res, {
      code: 201,
      status: true,
      data: createdUser,
      message: 'created_user'
    });

  }

  @Get()
  async findAll(
    @Res() res: Response
  ) {
    
    const findedUsers = await this.userService.findAll();

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      data: findedUsers,
      message: 'finded_users'
    });

  }

  @Get('/:id')
  async findOne(
    @Param('id') id: number,
    @Res() res: Response
  ) {
    
    const findedUser = await this.userService.findOne(id);

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      data: findedUser,
      message: 'finded_user'
    });

  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response 
  ) {

    const updatedUser = await this.userService.update(id, updateUserDto);

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      data: updatedUser,
      message: 'updated_user'
    });

  }

  @Delete('/:id')
  async delete(
    @Param('id') id: number,
    @Res() res: Response
  ) {

    const deletedUser = await this.userService.delete(id);

    if ( !deletedUser ) return this.helperService.generateResponse(res, {
      code: 400,
      status: false,
      message: 'invalid_password'
    });

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      message: 'deleted_user'
    });
    
  }

  @Post('/auth')
  async auth(
    @Body() authUserDto: AuthUserDto,
    @Res() res: Response
  ) {

    const token = await this.userService.auth(authUserDto);

    if ( !token ) return this.helperService.generateResponse(res, {
      code: 400,
      status: false,
      message: 'invalid_password'
    });

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      data: { token },
      message: 'user_authenticated'
    });
    
  }

  @Put('/password/:id')
  async changePassword(
    @Param('id') id: number,
    @Body() body: ChangePasswordUserDto,
    @Res() res: Response
  ) {
    
    const updatedUser = await this.userService.updatePassword(id, body);

    return this.helperService.generateResponse(res, {
      code: 200,
      status: true,
      data: true,
      message: 'changed_password'
    });

  }

}