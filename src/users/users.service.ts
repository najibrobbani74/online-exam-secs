import { Injectable,NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private user: any[] = [];

  getUserData(): any[] {
    return this.user;
  }

  generateUser(
    role: string,
    name: string,
    nim: string,
    password: string,
    confPassword: string,
  ) {
    if (password !== confPassword) {
      throw new NotFoundException(
        `password and confirm password does not match`,
      );
    }
    this.user.push({
      role,
      name,
      nim,
      password,
      confPassword,
    });
  }

  loginUser(nim: string, password: string) {
    const findUserByNim = this.user.findIndex((data) => data.nim === nim);
    const findUserByPassword = this.user.findIndex(
      (data) => data.password === password,
    );
    if (findUserByNim === -1 || findUserByPassword === -1) {
      throw new NotFoundException(`nim and password is not found`);
    }
  }
}
