import { IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    public name: string;

    @IsOptional()
    public email: string;

    @IsOptional()
    public id_class: string;
}