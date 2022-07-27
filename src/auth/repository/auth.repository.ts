import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Tokens } from '../tokens/token-response.tokens';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthRepository {
  @Inject(JwtService)
  private jwtservice: JwtService;
  @Inject(ConfigService)
  config: ConfigService;

  // compare User's data
  public compareHash(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  // hash user's data
  public hashData(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }

  // generator token rt and at
  async getToken(email: string, uid: string, role: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      //access token 15 mins
      this.jwtservice.signAsync(
        {
          sub: uid,
          email: email,
          role: role,
        },
        {
          secret: this.config.get<string>('JWT_KEY'),
          expiresIn: 60 * 15,
        },
      ),
      //refresh token a week
      this.jwtservice.signAsync(
        {
          sub: uid,
          email: email,
          role: role,
        },
        {
          secret: this.config.get<string>('JWT_KEY'),
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return { access_token: at, refresh_token: rt };
  }
}
