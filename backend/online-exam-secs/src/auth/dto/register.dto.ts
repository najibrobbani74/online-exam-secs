import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsOptional()
  public role: string;

  @IsOptional()
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
