import { Controller,Get,Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUserData() {
    return this.userService.getUserData();
  }

  @Post('/register')
  generateUser(
    @Body('name') name: string,
    @Body('email') email: any,
    @Body('password') password: any,
    @Body('confPassword') confPassword: any,
  ) {
    return this.userService.generateUser(
      name,
      email,
      password,
      confPassword,
    );
  }

  @Post('/login')
  loginUser(@Body('nim') nim: string, @Body('password') password: string) {
    return this.userService.loginUser(nim, password);
  }
}
