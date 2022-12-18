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

  async getById(id: number) {
    return await this.db.user.findFirst({ where: { id } });
  }

  async getAll() {
    return await this.db.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }

  async delete(id: number) {
    return await this.db.user.delete({ where: { id } });
  }
}
