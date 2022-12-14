import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @Post('/signup')
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.name = userData.name;
    userEntity.password = userData.password;
    await this.userRepo.create(userEntity);
    return userData;
  }
}
