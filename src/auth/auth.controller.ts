import { Controller,Get,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {};

    @Get()
    getUsers() {
        return this.authService.getUsers();
    }

    @Post('/register')
    registerUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('confirm_password') confirm_password: string,
    ) {
        return this.authService.registerUser(name,email,password,confirm_password);
    }

    @Post('/login')
    loginUser(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.authService.loginUser(email,password);
    }
}
