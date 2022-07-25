import { IsEmail, MinLength, ValidateIf } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: any;
  
  @Column()
  role: string;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  id_class: string;

  @Column()
  refresh_token: string;

  @Column()
  salt: string;

  @Column()
  @MinLength(8)
  password: string;

  async validatePassword(password: string): Promise<Boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
