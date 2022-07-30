import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AddAnswerDto } from './dto/add-answer.dto';
import { AddValueDto } from './dto/add-value.dto';
import { CreateFormsDto } from './dto/create-forms.dto';
import { UpdateFormsDto } from './dto/update-form.dto';
import { FormsService } from './forms.service';
import { UUIDValidationPipe } from './pipes/uuid-validation.pipe';
import { Roles } from '@/auth/decorator/roles.decorator';
import { Role } from '@/auth/entity/role.enum';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '@/auth/guard/user.guard';

@Controller('forms')
export class FormsController {
    private formsService: FormsService
    constructor(formsService: FormsService) {
        this.formsService = formsService
    }

    @Get()
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async getAllForms(): Promise<any> {
        return await this.formsService.getAllForms()
    }

    @Post()
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async createForms(@Body() payload: CreateFormsDto): Promise<any> {
        return await this.formsService.createForms(payload)
    }

    @Post("answer")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async addAnswer(@Body() payload: AddAnswerDto): Promise<any> {
        return await this.formsService.addAnswer(payload)
    }

    @Get("/:class_id")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async getFormsByClassId(@Param('class_id', UUIDValidationPipe) class_id: string): Promise<any> {
        return await this.formsService.getFormsByClassId(class_id)
    }

    @Get("/id/:form_id")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async getFormsByFormId(@Param("form_id", UUIDValidationPipe) form_id: string): Promise<any> {
        return await this.formsService.getFormsByFormId(form_id)
    }

    @Delete("/:form_id")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async deleteForm(@Param("form_id", UUIDValidationPipe) form_id: string): Promise<any> {
        return await this.formsService.deleteForm(form_id)
    }

    // @UseInterceptors(FileInterceptor('file_asset',{storage:({destination:"./file"})}))
    @Put("/:form_id")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async update(@Param("form_id", UUIDValidationPipe) form_id: string, @Body() payload: UpdateFormsDto): Promise<any> {
        return await this.formsService.updateForm(form_id, payload)
    }

    @Post("/value/:form_id")
    @Roles(Role.STUDENT, Role.ADMIN)
    @UseGuards(AuthGuard('jwt-refresh'), RolesGuard)
    async name(@Param("form_id", UUIDValidationPipe) form_id: string, @Body() payload: AddValueDto): Promise<any> {
        return await this.formsService.addValue(form_id, payload)
    }
}
