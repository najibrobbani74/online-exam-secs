import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class AddAnswerDto {
    @IsNotEmpty()
    form_id: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    answer: string[]
}