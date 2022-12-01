import { IsNotEmpty, IsUUID } from "class-validator";
import { Type } from "class-transformer";

export class UpdateClassesDto {
    @IsNotEmpty()
    class_name: string;

    @IsNotEmpty()
    description: string;
}