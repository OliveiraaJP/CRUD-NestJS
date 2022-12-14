import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmailValidator } from './validators/email-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, PrismaService, UniqueEmailValidator],
})
export class UserModule {}
