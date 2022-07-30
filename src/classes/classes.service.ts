import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { classesRepository } from 'src/config/connectiondb.config';
import { CreateClassesDto } from './dto/create-classes.dto';
import { baseUrl } from 'src/config/url.config';
import { DeleteClassesDto } from './dto/delete-classes.dto';
import { NotFoundException } from '@nestjs/common';
import { UUIDValidationPipe } from './pipes/uuid-validation.pipe';
import { UpdateClassesDto } from './dto/update-classes.dto';

// import { ClassesRepository } from './repository/classes.repository';

@Injectable()
export class ClassesService {
    async createClasses(createClassesDto: CreateClassesDto): Promise<any> {
        const { class_name, description } = createClassesDto

        const classes = classesRepository.create()
        classes.name = class_name
        classes.description = description
        // classes.invite_link = baseUrl + UUIDValidationPipe
        classes.id_forms = []

        try {
            await classes.save()
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
    async deleteClasses(id_class): Promise<any> {

        try {
            const delClass = await classesRepository.delete({ id: id_class })
            if (delClass.affected == 0) {
                throw new NotFoundException(`Class with id ${id_class} is not found`);
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }

    async getAllClasses() {
        return classesRepository.find()
    }
    async getClasses(id_class) {
        const Class = await classesRepository.find({
            where: { id: id_class }
        });
        if (Class.length < 1) {
            throw new NotFoundException(`Class with id ${id_class} is not found`);
        }
        return Class[0];
    }

    async updateClasses(id_class, data: UpdateClassesDto) {
        const { class_name, description } = data
        try {
            const Class = await classesRepository.update({
                id: id_class
            }, {
                name: class_name,
                description: description
            })
            if (Class.affected == 0) {
                throw new NotFoundException(`Class with id ${id_class} is not found`)
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e)
        }
    }
}
