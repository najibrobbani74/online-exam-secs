import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class AddValueDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    value: string
}