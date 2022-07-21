import { Injectable,NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    private users: any[] = [];

    getUsers(){
        return this.users;
    }

    registerUser(registerDto: RegisterDto) {
        const { name,email,password,confirm_password } = registerDto
        if (password !== confirm_password) {
            throw new NotFoundException(`password dan confirm password tidak cocok`)
        }
        this.users.push({ id: uuidv4(),name,email,password })
    }

    loginUser(loginDto: LoginDto) {
        const { email,password } = loginDto;
        const findEmail = this.users.findIndex((data) => data.email === email)
        const findPassword = this.users.findIndex((data) => data.password === password)
        if (findEmail === -1 || findPassword === -1) {
            throw new NotFoundException(`email dan password tidak ditemukan`)
        }
    }
}
