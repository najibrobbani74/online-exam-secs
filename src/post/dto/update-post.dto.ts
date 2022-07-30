import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdatePostDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    message: string;
}