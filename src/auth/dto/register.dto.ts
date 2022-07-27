import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  public role: string;

  public id_class: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @MinLength(6)
  public password: string;

  @IsNotEmpty()
  @MinLength(6)
  public confirm_password: string;
}
