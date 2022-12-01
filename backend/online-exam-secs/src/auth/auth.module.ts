import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';
import { User } from './entity/auth.entity';
import { RtStrategy } from './strategy/rt.strategy';
import { AtStrategy } from './strategy/at.strategy';
import { RolesGuard } from './guard/user.guard';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, RtStrategy, AtStrategy, RolesGuard],
})
export class AuthModule {}
