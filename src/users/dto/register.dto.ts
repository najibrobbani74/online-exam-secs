import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    id_class: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @MinLength(6)
    confirm_password: string;
}