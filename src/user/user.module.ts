import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user.controller';
import { UsuarioRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UsuarioRepository, PrismaService],
})
export class UserModule {}
