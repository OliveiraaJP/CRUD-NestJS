import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private db: PrismaService) {}

  async create(user: UserEntity) {
    this.db.user.create({ data: user });
  }
}
