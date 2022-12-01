import {
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
  Delete,
}
from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Tokens } from './tokens/token-response.tokens';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authservice: AuthService;

  // final, no error
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED) //201
  private signUp(@Body() body: RegisterDto): Promise<void> {
    return this.authservice.signUp(body);
  }

  // final, no error
  @Post('/sign-in')
  @HttpCode(HttpStatus.OK) //200
  async signIn(@Body() body: LoginDto): Promise<Tokens> {
    return this.authservice.signIn(body);
  }

  // final, no error
  @UseGuards(AuthGuard('jwt'))
  @Delete('/sign-out')
  @HttpCode(HttpStatus.OK) //200
  async signOut(@Req() req: Request) {
    const user = req.user;
    return this.authservice.signOut(user['sub']);
  }

  // final, no error
  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('/refresh-token')
  @HttpCode(HttpStatus.OK) //200
  async refreshToken(@Req() req: Request) {
    const user = req.user;
    return this.authservice.refreshToken(user['sub'], user['refreshToken']);
  }
}
