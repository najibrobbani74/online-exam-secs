import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenExpiredError } from 'jsonwebtoken';
import { RefreshTokenConfig } from 'src/config/jwt.config';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
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

  /* new access token with Refresh access token */
  async refreshAccessToken(refreshAccessTokenDto: RefreshAccessTokenDto): Promise<{ access_token: string }> {
    const { refresh_token } = refreshAccessTokenDto;
    const payload = await this.decodeToken(refresh_token);

    const refreshToken = await this.refreshTokenEntity.findOne({
      where: {
        id: payload.id
      }, relations: ['user']
    });
    
    if (!refreshToken) {
      throw new UnauthorizedException('refresh token is not found');
    }
    
    if (refreshToken.isRevoked) {
    throw new UnauthorizedException('refresh token is not found');
    }

    const access_token = await this.createAccessToken(refreshToken.user)
    return { access_token };
  }

  /* Decode token for refresh acceess token */
  async decodeToken(token: string): Promise<any> {
    try {
      return await this.jwtService.verifyAsync(token);
    } catch (e) {
      if (e instanceof TokenExpiredError) throw new UnauthorizedException('refresh token is expired');
      throw new InternalServerErrorException('failed to decode token');
    }
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

  /* revoke */
  async revokeRefreshToken(id: string): Promise<void> {
    const refresh_token = await this.refreshTokenEntity.findOne({where: {
      id: id
    }});

    if (!refresh_token) throw new NotFoundException('refresh token is not found');
    
    refresh_token.isRevoked = true;

    await this.refreshTokenEntity.save(refresh_token);
  }
}
