import { IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    confirm_password: string;
}