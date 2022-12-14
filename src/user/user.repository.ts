import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private db: PrismaService) {}

  async create(user: UserEntity) {
    await this.db.user.create({ data: user });
  }

  async get(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }
}
