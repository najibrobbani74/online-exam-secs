import { Roles } from '@/auth/decorator/roles.decorator';
import { User } from '@/auth/entity/auth.entity';
import { Role } from '@/auth/entity/role.enum';
import { RolesGuard } from '@/auth/guard/user.guard';
import { UUIDValidationPipe } from '@/classes/pipes/uuid-validation.pipe';
import { Controller, Inject, Get, UseGuards, Patch, Param, Body, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
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
  findall(): Promise<User[]> {
    return this.service.findAll();
  }

  @Roles(Role.STUDENT, Role.ADMIN)
  @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
  @Get("/:uid")
  findOne(@Param("uid") id: UUIDValidationPipe): Promise<User[]> {
    return this.service.findOne(id);
  }

  @Roles(Role.STUDENT, Role.ADMIN)
  @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
  @Patch('/:uid')
  async updateUser(@Param('uid') uid: UUIDValidationPipe, @Body() dto: UpdateUserDto): Promise<any> {
    await this.service.updateUser(uid, dto);
    return { msg: 'data updated' };
  }

  @Roles(Role.STUDENT, Role.ADMIN)
  @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
  @Delete('/:uid')
  public async deleteUser(@Param('uid') uid: UUIDValidationPipe): Promise<any> {
    await this.service.deleteUser(uid);
    return { msg: 'data deleted' };
  }
}


