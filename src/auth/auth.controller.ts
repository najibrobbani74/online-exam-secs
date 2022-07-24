import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interface/login-response.interface.';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @Post('/login')
  async loginUser(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.authService.loginUser(loginDto);
  }
}
