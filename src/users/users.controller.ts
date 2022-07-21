import { Controller,Get,Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUserData() {
    return this.userService.getUserData();
  }

  @Post('/register')
  generateUser(
    @Body('role') role: string,
    @Body('name') name: string,
    @Body('nim') nim: any,
    @Body('password') password: any,
    @Body('confPassword') confPassword: any,
  ) {
    return this.userService.generateUser(
      role,
      name,
      nim,
      password,
      confPassword,
    );
  }

  @Post('/login')
  loginUser(@Body('nim') nim: string, @Body('password') password: string) {
    return this.userService.loginUser(nim, password);
  }
}
