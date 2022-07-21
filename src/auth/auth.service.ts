import { Injectable,NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
    private users: any[] = [];

    getUsers(){
        return this.users;
    }

    registerUser(
        name: string,
        email: string,
        password: string,
        confirm_password: string,
    ) {
        if (password !== confirm_password) {
            throw new NotFoundException(`password dan confirm password tidak cocok`)
        }
        this.users.push({name,email,password})
    }

    loginUser(
        email: string,
        password: string
    ) {
        const findEmail = this.users.findIndex((data) => data.email === email)
        const findPassword = this.users.findIndex((data) => data.password === password)
        if (findEmail === -1 || findPassword === -1) {
            throw new NotFoundException(`email and password tidak ditemukan`)
        }
    }
}
