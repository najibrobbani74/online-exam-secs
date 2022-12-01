import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  public readonly email: string;

  @IsNotEmpty()
  public readonly password: string;
}
