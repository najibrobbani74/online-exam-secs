import { UUIDValidationPipe } from '@/classes/pipes/uuid-validation.pipe';
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AddCommentDto } from './dto/add-comment.dto';
import { AddPostDto } from './dto/add-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    private postService: PostService

    constructor(postService: PostService) {
        this.postService = postService
    }

    @Get()
    async getAllPost(): Promise<any> {
        return await this.postService.getAllPost()
    }

    @Get("/class/:id_class")
    async getPostByClassId(@Param("id_class", UUIDValidationPipe) id_class): Promise<any> {
        return await this.postService.getPostByClassId(id_class)
    }

    @Post()
    async addPost(@Body() payload: AddPostDto): Promise<any> {
        return await this.postService.addPost(payload)
    }
    @Post("/comment")
    async addComment(@Body() payload: AddCommentDto): Promise<any> {
        return await this.postService.addComment(payload)
    }
    @Put("/:id_post")
    async updatePost(@Param("id_post") id_post, @Body() payload: UpdatePostDto): Promise<any> {
        return await this.postService.updatePost(id_post, payload)
    }
    @Delete("/:id_post")
    async deletePost(@Param("id_post") id_post): Promise<any> {
        return await this.postService.deletePost(id_post)
    }
}
