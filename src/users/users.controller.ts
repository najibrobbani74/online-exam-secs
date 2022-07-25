import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { JwtGuard } from 'src/guard/jwt.guard';
import { RegisterDto } from './dto/register.dto';
import { Users } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @UseGuards(JwtGuard)
  async getAllUser(@GetUser() user: Users) {
    return this.userService.getAllUser();
  }
  @Post('/register')
  async registerUser(@Body() payload: RegisterDto): Promise<void> {
    return this.userService.registerUser(payload);
  }
}
