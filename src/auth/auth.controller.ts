import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { LoginResponse } from './interface/login-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @Post('/login')
  async loginUser(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.authService.loginUser(loginDto);
  }

  @Post('refresh-token')
  async refreshAccessToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto): Promise<{ access_token: string}> {
    return this.authService.refreshAccessToken(refreshAccessTokenDto);
  }
}
