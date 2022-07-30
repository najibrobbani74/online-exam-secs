import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Forms extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    id_class: string

    @Column()
    start_time: string

    @Column()
    duration: string

    @Column({ type: "text", array: true, default: [] })
    questions: string[];

    @Column({ type: "text", array: true, default: [] })
    answers: string[];

    @Column({ type: "text", array: true, default: [] })
    value: string[]
}