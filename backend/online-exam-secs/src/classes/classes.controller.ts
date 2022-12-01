import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateClassesDto } from './dto/create-classes.dto';
import { ClassesService } from './classes.service';
import { DeleteClassesDto } from './dto/delete-classes.dto';
import { UUIDValidationPipe } from './pipes/uuid-validation.pipe';
import { UpdateClassesDto } from './dto/update-classes.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '@/auth/decorator/roles.decorator';
import { Role } from '@/auth/entity/role.enum';
import { RolesGuard } from '@/auth/guard/user.guard';

@Controller('classes')
export class ClassesController {
    private classesService: ClassesService

    constructor(classesService: ClassesService) {
        this.classesService = classesService
    }

    @Put("/:id_class")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async updateClass(
        @Body() payload: UpdateClassesDto,
        @Param("id_class", UUIDValidationPipe) id_class: number
    ): Promise<any> {
        return await this.classesService.updateClasses(id_class, payload)
    }

    @Get("/:id_class")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async getClass(@Param("id_class", UUIDValidationPipe) id_class: number): Promise<any> {
        return await this.classesService.getClasses(id_class)
    }
    @Get()
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async getAllClass(): Promise<any> {
        return await this.classesService.getAllClasses()
    }

    @Post()
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async createClasses(@Body() payload: CreateClassesDto): Promise<any> {
        return await this.classesService.createClasses(payload)
    }

    @Delete("/:id_class")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async deleteClasses(@Param("id_class", UUIDValidationPipe) id_class: number): Promise<any> {
        return await this.classesService.deleteClasses(id_class)
    }
}
