import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { UsersEntity } from './entity/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) 
    private usersEntity: Repository<UsersEntity>
  ) {}
  
  async getAllUser(){
    return await this.usersEntity.find()
  }

  async registerUser(registerDto: RegisterDto): Promise<void> {
    const { name, email, id_class, password, confirm_password, role } = registerDto;

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

    let user = this.usersEntity.create()
    user.role = role;
    user.name = name;
    user.email = email;
    user.id_class = id_class;
    user.refresh_token = 'user not logged in';
    user.salt = await bcrypt.genSalt()
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await this.usersEntity.save(user);
    } catch (e) {
      if (e.code == 23505) {
        throw new InternalServerErrorException('email already exist');
      } else {
        throw new InternalServerErrorException(e);
      }
    }
  }

 async validateUser(email: string, password: string): Promise<UsersEntity> {
  const user = await this.usersEntity.findOne({ where: {
    email: email,
  }});

  if (user && user.validatePassword(password)) {
    return user;
  }
  return null;
 }

 async findOneById(uid: string): Promise<UsersEntity> {
  return await this.usersEntity.findOne({where: {
    uid: uid
  }});
 }
}
