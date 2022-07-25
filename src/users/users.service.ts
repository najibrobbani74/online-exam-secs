import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { Users } from './entity/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) 
    private users: Repository<Users>
  ) {}
  
  async getAllUser(){
    return await this.users.find()
  }

  async registerUser(registerDto: RegisterDto): Promise<void> {
    const { name, email, id_class, password, confirm_password } = registerDto;

    if (password.length <= 6) {
      throw new NotAcceptableException('password must contain at least 6 character');
    }
    
    if (password.search(/^(?=.*[A-Z]).*$/)) {
      throw new NotAcceptableException('password must contain at least 1 upper case');
    }
    
    if (password.search(/^(?=.*[0-9]).*$/)) {
      throw new NotAcceptableException('password must contain at least 1 number');
    }
    
    if (password.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/)) {
      throw new NotAcceptableException('password must contain at least 1 special character');
    }

    if (password !== confirm_password) {
      throw new NotAcceptableException('password and confirm password do not match');
    }

    let user = this.users.create()
    user.name = name;
    user.email = email;
    user.id_class = id_class;
    user.salt = await bcrypt.genSalt()
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await this.users.save(user);
    } catch (e) {
      if (e.code == 23505) {
        throw new InternalServerErrorException('email already exist');
      } else {
        throw new InternalServerErrorException(e);
      }
    }
  }

 async validateUser(email: string, password: string): Promise<Users> {
  const user = await this.users.findOne({ where: {
    email: email,
  }});

  if (user && user.validatePassword(password)) {
    return user;
  }
  return null;
 }

 async findOneById(id: string): Promise<Users> {
  return await this.users.findOne({where: {
    id: id
  }});
 }
}
