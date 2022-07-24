import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshTokenConfig } from 'src/config/jwt.config';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenEntity } from './entity/auth.entity';
import { LoginResponse } from './interface/login-response.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private refreshTokenEntity: Repository<RefreshTokenEntity>,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  /* user sign in */
  async loginUser(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;
    const user = await this.userService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('wrong email or password');
    }

    const access_token = await this.createAccessToken(user);
    const refresh_token = await this.createRefreshToken(user)

    return {access_token, refresh_token} as LoginResponse;
  }

  /* create access token */
  async createAccessToken(user: Users): Promise<string> {
    const payload = {
      sub: user.id,
    };

    const access_token = await this.jwtService.signAsync(payload);

    return access_token;
  }

  /* create refresh token */
  async generateRefreshToken(
    user: Users,
    ttl: number,
  ): Promise<RefreshTokenEntity> {
    const refresh_token = this.refreshTokenEntity.create();
    refresh_token.user = user;
    refresh_token.isRevoked = false;

    let expiredAt = new Date();
    expiredAt.setTime(expiredAt.getTime() + ttl);
    refresh_token.expiredAt = expiredAt;

    return await this.refreshTokenEntity.save(refresh_token);
  }

  /* get refresh token */
  async createRefreshToken(user: Users): Promise<string> {
    const refresh_token = await this.generateRefreshToken(
      user, 
      +RefreshTokenConfig.expiresIn,
    );

    const payload = {
      jid: refresh_token.id,
    }

    const refreshToken = await this.jwtService.signAsync(payload, RefreshTokenConfig);

    return refreshToken;
  }
}
