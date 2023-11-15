import { Repository } from 'typeorm'
import { Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../../models/user.model'
import { HelperService } from '../../../helpers/helper.service'
import { 
  CreateUserDto, 
  UpdateUserDto, 
  AuthUserDto, 
  ChangePasswordUserDto,
} from '@classes'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly helpers: HelperService
  ) {}

  async create(dto: CreateUserDto) {

    const newUser = new User();

    newUser.firstName = dto.firstName;
    newUser.lastName = dto.lastName;
    newUser.password = this.helpers.hashPassword(dto.password);
    newUser.username = dto.username;

    return this.userRepository.save(newUser);
    
  }

  async findAll() {
    return this.userRepository.find({ 
      where: {
        isDeleted: false
      },
      select: { firstName: true, lastName: true, id: true, username: true }
    });
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ 
      where: { id, isDeleted: false },
      select: { firstName: true, lastName: true, id: true, username: true }
    });
  }

  async update(id: number, dto: UpdateUserDto) {

    const findedUser = await this.userRepository.findOneBy({ id, isDeleted: false });

    if ( !findedUser ) return false;

    findedUser.firstName = dto.firstName;
    findedUser.lastName = dto.lastName;
    findedUser.username = dto.username;

    return this.userRepository.save(findedUser);

  }

  async delete(id: number) {

    const findedUser = await this.userRepository.findOneBy({ id, isDeleted: false });

    if ( !findedUser ) return false;

    findedUser.isDeleted = true;

    return this.userRepository.save(findedUser);

  }

  async auth(dto: AuthUserDto) {

    const findedUser = await this.userRepository.findOneBy({ username: dto.username });
   
    if ( !findedUser ) return false;

    const isMatchedPassword = this.helpers.checkPassword(dto.password, findedUser.password);

    if ( !isMatchedPassword ) return false;

    const token = this.helpers.createjwtToken({ id: findedUser.id });

    return token;
    
  }

  async updatePassword(id: number, dto: ChangePasswordUserDto) {
    
    const findedUser = await this.userRepository.findOneBy({ id });

    if ( !findedUser ) return false;

    findedUser.password = this.helpers.hashPassword(dto.password);

    return this.userRepository.save(findedUser);

  }

}