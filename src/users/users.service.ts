import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/auth/entity/auth.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async findAll(): Promise<User[]> {
    return await this.repository.find({});
  }

  public async findOne(id_user): Promise<User[]> {
    const get = await this.repository.find({ where: { uid: id_user } });
    if (get.length < 1) {
      throw new NotFoundException("User not found")
    }
    return get
  }

  public async updateUser(uid, dto: UpdateUserDto): Promise<any> {
    const user = await this.repository.findOne({ where: { email: dto.email } });
    if (user) {
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    };

    return this.repository.update(uid, {
      email: dto.email,
      name: dto.name,
      id_class: dto.id_class
    });
  }

  // error
  public async deleteUser(uid): Promise<any> {
    const deleted = await this.repository.delete(uid);

    if (deleted.affected == 0) {
      throw new NotFoundException("User not found")
    }
    return deleted
  }
}
