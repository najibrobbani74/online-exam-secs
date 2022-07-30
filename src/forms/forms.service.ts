import { Injectable, InternalServerErrorException, NotFoundException, StreamableFile } from '@nestjs/common';
import { formsRepository, classesRepository } from 'src/config/connectiondb.config';
import { AddAnswerDto } from './dto/add-answer.dto';
import { CreateFormsDto } from './dto/create-forms.dto';

@Injectable()
export class FormsService {
    async getAllForms(): Promise<any> {
        let get = await formsRepository.find()
        get = get.map(a => {
            a["questions"] = a["questions"].map(b => JSON.parse(b))
            a["answers"] = a["answers"].map(c => JSON.parse(c))
            a["value"] = a["value"].map(d => JSON.parse(d))
            return a
        })
        return get
    }

    async getFormsByClassId(class_id: string) {
        let get = await formsRepository.find({ where: { id_class: class_id } })
        get = get.map(a => {
            a["questions"] = a["questions"].map(b => JSON.parse(b))
            a["answers"] = a["answers"].map(c => JSON.parse(c))
            a["value"] = a["value"].map(d => JSON.parse(d))
            return a
        })
        return get
    }
    async getFormsByFormId(form_id: string) {
        let get = await formsRepository.find({ where: { id: form_id } })
        get = get.map(a => {
            a["questions"] = a["questions"].map(b => JSON.parse(b))
            a["answers"] = a["answers"].map(c => JSON.parse(c))
            a["value"] = a["value"].map(d => JSON.parse(d))
            return a
        })
        return get
    }
    async createForms(createFormsDto: CreateFormsDto): Promise<any> {
        const { form_name, class_id } = createFormsDto

        const form = formsRepository.create()
        form.name = form_name
        form.description = ""
        form.id_class = class_id
        form.start_time = ""
        form.duration = ""
        form.questions = []
        form.answers = []
        form.value = []
        try {
            if ((await classesRepository.find({ where: { id: class_id } })).length == 0) { throw new NotFoundException("Class  not found") }
            await form.save()
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e)
        }
    }

    async addAnswer(addAnswerDto: AddAnswerDto): Promise<any> {
        const { form_id, name, email, answer } = addAnswerDto

        const answers = await formsRepository.find({ select: ["answers"], where: { id: form_id } })
        if (answers.length < 1) {
            throw new NotFoundException("Form not found")
        }
        const result = { "name": name, "email": email, "answer": answer }
        answers[0]["answers"].push(JSON.stringify(result))
        try {
            const form = await formsRepository.update({
                id: form_id,
            }, {
                answers: answers[0]["answers"]
            });
            if (form.affected == 0) {
                throw new NotFoundException("Form id not found")
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e)
        }
    }
    async deleteForm(form_id: string) {
        const Form = await formsRepository.delete({ id: form_id })
        if (Form.affected == 0) {
            throw new NotFoundException("Form not found")
        }
        return { berhasil: true }
    }
    async updateForm(form_id, payload) {
        let { form_name, description, start_time, duration, questions } = payload
        questions = questions.map(a => { a = JSON.stringify(a); return a })
        try {
            const form = await formsRepository.update({
                id: form_id,
            }, {
                name: form_name,
                description: description,
                start_time: start_time,
                duration: duration,
                questions: questions
            });
            if (form.affected == 0) {
                throw new NotFoundException("Form id not found")
            }
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e)
        }
    }
    async addValue(form_id, payload) {
        const { email, value } = payload
        const form = (await this.getFormsByFormId(form_id))[0]["value"]
        form.push(JSON.stringify({ "email": email, "value": value }))
        try {
            const update = await formsRepository.update({
                id: form_id,
            }, {
                value: form
            });
            return { berhasil: true }
        } catch (e) {
            throw new InternalServerErrorException(e)
        }
    }
}
