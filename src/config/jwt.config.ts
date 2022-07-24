import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
  secret: 'processenvsecret',
  signOptions: {
    expiresIn: 60,
  },
};

export const RefreshTokenConfig: JwtSignOptions = {
  expiresIn: 3600 * 24
};