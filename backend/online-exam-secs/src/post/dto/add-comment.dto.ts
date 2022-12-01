import { IsNotEmpty } from "class-validator";

export class AddCommentDto {
    @IsNotEmpty()
    id_post: string;

    @IsNotEmpty()
    comment: string;
}