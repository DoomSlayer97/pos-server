
export class CreateUserDto {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export class UpdateUserDto {
  firstName: string;
  lastName: string;
  username: string;
}

export class AuthUserDto {
  username: string;
  password: string;
}

export class ChangePasswordUserDto {
  password: string;
}

export class ChangeStatusDto {
  status: string;
}