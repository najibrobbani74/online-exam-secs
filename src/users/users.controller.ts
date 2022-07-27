import { User } from '@/auth/entity/auth.entity';
import { Controller, Inject, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private readonly service: UsersService;
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @UseGuards(AuthGuard('jwt'))
  @Get()
  private findall(): Promise<User[]>{
    return this.service.findAll();
  }
}
