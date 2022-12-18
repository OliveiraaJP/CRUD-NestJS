import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserUtils } from './user.utils';
import { UniqueEmailValidator } from './validators/email-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, PrismaService, UniqueEmailValidator, UserUtils],
})
export class UserModule {}
