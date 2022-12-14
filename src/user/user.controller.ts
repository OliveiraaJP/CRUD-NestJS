import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UsuarioRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private readonly usuarioRepo: UsuarioRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    return userData;
  }
}
