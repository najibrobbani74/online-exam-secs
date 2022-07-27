import { Roles } from '@/auth/decorator/roles.decorator';
import { User } from '@/auth/entity/auth.entity';
import { Role } from '@/auth/entity/role.enum';
import { RolesGuard } from '@/auth/guard/user.guard';
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

  @Roles(Role.STUDENT, Role.ADMIN)
  @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
  @Get()
  private findall(): Promise<User[]> {
    return this.service.findAll();
  }
}
