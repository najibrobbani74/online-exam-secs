import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { Tokens } from './tokens/token-response.tokens';
import { Role } from './entity/role.enum';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private repository: Repository<User>;
  @Inject(AuthRepository)
  private readonly authRepository: AuthRepository;

  //sign up function(fix)
  public async signUp(dto: RegisterDto): Promise<void> {
    let user: User = await this.repository.findOne({
      where: { email: dto.email },
    });
    if (user) {
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    }

    if (dto.password.search(/^(?=.*[A-Z]).*$/)) {
      throw new HttpException(
        'password require at least one upper case',
        HttpStatus.CONFLICT,
      );
    }
    if (dto.password.search(/^(?=.*[0-9]).*$/)) {
      throw new HttpException(
        'password require at least one number',
        HttpStatus.CONFLICT,
      );
    }
    if (
      dto.password.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/)
    ) {
      throw new HttpException(
        'password require at least one special character',
        HttpStatus.CONFLICT,
      );
    }
    if (dto.password !== dto.confirm_password) {
      throw new HttpException(
        'password and confirm password do not match',
        HttpStatus.CONFLICT,
      );
    }

    user = new User();
    const admin = 'admin@gmail.com';

    if (dto.email === admin) user.role = Role.ADMIN;
    else user.role = Role.STUDENT;

    user.name = dto.name;
    user.email = dto.email;
    user.password = this.authRepository.hashData(dto.password);

    try {
      await this.repository.save(user);
    } catch (e) {
      if (e)
        throw new InternalServerErrorException(
          'Error saving data, please refresh this page',
        );
    }
  }

  // sign-in user (fix)
  public async signIn(dto: LoginDto): Promise<Tokens> {
    const user = await this.repository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('email and password is not found');

    const compare = this.authRepository.compareHash(
      dto.password,
      user.password,
    );
    if (!compare)
      throw new ForbiddenException('email and password is not found');

    const tokens = await this.authRepository.getToken(
      user.email,
      user.uid,
      user.role,
    );
    await this.updateRt(user.uid, tokens.refresh_token);
    return tokens;
  }

  //sign-out user (fix)
  public async signOut(uid: string) {
    await this.repository.update(uid, { refresh_token: null });
  }

  //sign-out user (fix)
  public async refreshToken(uid: string, rt: string) {
    const user = await this.repository.findOne({
      where: {
        uid: uid,
      },
    });
    if (!user) throw new UnauthorizedException('Access Denied');

    const isValid = this.authRepository.compareHash(rt, user.refresh_token);
    if (!isValid) throw new UnauthorizedException('Access Denied');

    const tokens = await this.authRepository.getToken(
      user.email,
      user.uid,
      user.role,
    );
    await this.updateRt(user.uid, tokens.refresh_token);
    return tokens;
  }

  //rt refresh
  async updateRt(userUid: string, rt: string) {
    const rtHash = this.authRepository.hashData(rt);

    this.repository.update(userUid, { refresh_token: rtHash });
  }
}
