import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { Tokens } from './tokens/token-response.tokens';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;
  @Inject(AuthRepository)
  private readonly authRepository: AuthRepository;

  //sign up function(fix)
  public async signUp(dto: RegisterDto): Promise<void> {
    if (dto.password !== dto.confirm_password) {
      throw new NotAcceptableException(
        'password and confirm password is not valid',
      );
    }

    let user: User = await this.repository.findOne({
      where: { email: dto.email },
    });

    if (user) {
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    }

    user = new User();
    user.name = dto.name;
    user.email = dto.email;
    user.id_class = null;
    user.role = null;
    user.password = this.authRepository.hashData(dto.password);

    try {
      await this.repository.save(user);
    } catch (e) {
      if (e) throw new InternalServerErrorException('Error saving data, please refresh this page');
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

    const tokens = await this.authRepository.getToken(user.email, user.uid);
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

    const tokens = await this.authRepository.getToken(user.email, user.uid);
    await this.updateRt(user.uid, tokens.refresh_token);
    return tokens;
  }

  //rt refresh
  async updateRt(userUid: string, rt: string) {
    const rtHash = this.authRepository.hashData(rt);

    this.repository.update(userUid, { refresh_token: rtHash });
  }
}
