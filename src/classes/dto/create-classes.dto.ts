import { IsNotEmpty } from "class-validator";

export class CreateClassesDto {
    @IsNotEmpty()
    class_name: string;

    @IsNotEmpty()
    description: string;
}