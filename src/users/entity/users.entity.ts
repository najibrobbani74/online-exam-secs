import { IsEmail, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
