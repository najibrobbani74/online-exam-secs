import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterBookDto {
    @IsOptional()
    // @Type(() => Number)
    id_class: string;
}