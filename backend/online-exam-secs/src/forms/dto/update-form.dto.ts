import { IsNotEmpty } from "class-validator";

export class UpdateFormsDto {
    @IsNotEmpty()
    form_name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    start_time: string

    @IsNotEmpty()
    duration: string

    @IsNotEmpty()
    questions
}