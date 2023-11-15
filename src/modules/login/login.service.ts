import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthLoginDto } from "@classes";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.model";
import { Repository } from "typeorm";
import { HelperService } from "src/helpers/helper.service";

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly helpers: HelperService
  ) {}

  async auth(dto: AuthLoginDto) {

    const findedUser = await this.userRepository.findOneBy({ username: dto.username });

    if ( !findedUser )
      throw new HttpException("invalid_username_or_password", HttpStatus.BAD_REQUEST);

    if ( !this.helpers.checkPassword(dto.password, findedUser.password) )
      throw new HttpException("invalid_username_or_password", HttpStatus.BAD_REQUEST);

    const jwtToken = this.helpers.createjwtToken({ id: findedUser.id });

    return jwtToken;

  }

}