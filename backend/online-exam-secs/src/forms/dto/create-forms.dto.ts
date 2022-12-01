import { IsNotEmpty } from "class-validator";

export class CreateFormsDto {
    @IsNotEmpty()
    form_name: string;

    @IsNotEmpty()
    class_id: string;
}