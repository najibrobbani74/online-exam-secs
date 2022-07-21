import { Controller,Get,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {};

    @Get()
    getUsers() {
        return this.authService.getUsers();
    }

    @Post('/register')
    registerUser(@Body() payload: RegisterDto) {
        return this.authService.registerUser(payload);
    }

    @Post('/login')
    loginUser(@Body() paylod: LoginDto) {
        return this.authService.loginUser(paylod);
    }
}
