import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  async registerUser(@Body() payload: RegisterDto): Promise<void> {
    return this.userService.registerUser(payload);
  }
}
