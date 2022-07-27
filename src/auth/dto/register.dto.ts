import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  public readonly role: string;

  public readonly id_class: string;

  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @IsNotEmpty()
  public readonly name: string;

  @IsNotEmpty()
  @MinLength(6)
  public readonly password: string;

  @IsNotEmpty()
  @MinLength(6)
  public readonly confirm_password: string;
}
