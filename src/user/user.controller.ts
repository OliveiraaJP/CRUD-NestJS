import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { UserUtils } from './user.utils';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userUtils: UserUtils,
  ) {}

  @Post('/signup')
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.name = userData.name;
    userEntity.password = userData.password;
    await this.userRepo.create(userEntity);
    return userData;
  }

  @Get()
  async getUsers() {
    const users = await this.userRepo.getAll();
    const hashUsers = this.userUtils.filterEmails(users);
    return hashUsers;
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const verifyHasUser = await this.userRepo.getById(+id);
    if (!verifyHasUser)
      throw new HttpException('Usuário Inexistente', HttpStatus.NOT_FOUND);
    const removedUser = await this.userRepo.delete(+id);
    return { message: 'Usuário removido', ...removedUser };
  }
}
