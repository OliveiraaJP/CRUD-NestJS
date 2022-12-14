import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsuarioRepository } from './user.repository';

@Module({
    controllers: [UserController],
    providers: [UsuarioRepository],
})
export class UserModule {}
