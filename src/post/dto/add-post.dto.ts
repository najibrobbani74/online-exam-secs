import { IsEmail, IsNotEmpty } from "class-validator";

export class AddPostDto {
    @IsNotEmpty()
    class_id: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    message: string;
}