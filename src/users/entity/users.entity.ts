import { IsEmail, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RefreshTokenEntity } from 'src/auth/entity/auth.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  id_class: string;

  @Column()
  salt: string;

  @Column()
  @MinLength(8)
  password: string;

  @OneToMany(() => RefreshTokenEntity, (refresh_token) => refresh_token.user, {
    eager: true,
  })
  refresh_token: RefreshTokenEntity[];

  async validatePassword(password: string): Promise<Boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
