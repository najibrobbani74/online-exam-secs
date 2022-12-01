import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class DeleteClassesDto {
    @IsNotEmpty()
    @Type(() => Number)
    id_class: number;
}