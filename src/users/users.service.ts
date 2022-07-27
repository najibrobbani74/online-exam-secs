import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { User } from '@/auth/entity/auth.entity';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async findAll(): Promise<User[]> {
    return await this.repository.find({});
  }
}
