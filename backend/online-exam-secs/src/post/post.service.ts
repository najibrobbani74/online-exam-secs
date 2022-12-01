import { classesRepository, postRepository } from '@/config/connectiondb.config';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PostService {
    async getAllPost() {
        let get = await postRepository.find()
        get = get.map(a => {
            a["comments"] = a["comments"].map(b => JSON.parse(b))
            return a
        })
        return get
    }
    async addPost(payload): Promise<any> {
        const { class_id, email, message } = payload

        const add = postRepository.create()
        add.email = email
        add.id_class = class_id
        add.message = message

        try {
            if ((await classesRepository.find({ where: { id: class_id } })).length == 0) { throw new NotFoundException("Class  not found") }
            await add.save()
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    async updatePost(id_post, payload): Promise<any> {
        const { email, message } = payload

        try {
            const update = await postRepository.update({
                id: id_post
            }, {
                email: email,
                message: message
            })
            if (update.affected < 1) {
                throw new NotFoundException("Post not found")
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
    async deletePost(id_post): Promise<any> {
        try {
            const deleted = await postRepository.delete({ id: id_post })
            if (deleted.affected < 1) {
                throw new NotFoundException("Post not found")
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
    async getPostByClassId(id_class): Promise<any> {
        let get = await postRepository.find({
            where: { id_class: id_class }
        })
        get = get.map(a => {
            a["comments"] = a["comments"].map(b => JSON.parse(b))
            return a
        })
        return get
    }
    async addComment(payload) {
        const { id_post, comment } = payload
        const comments = (await postRepository.find({ where: { id: id_post } }))[0]["comments"]
        comments.push(JSON.stringify(comment))
        try {
            const updeted = await postRepository.update({ id: id_post }, { comments: comments })
            if (updeted.affected < 1) {
                throw new NotFoundException("Post not found")
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}
