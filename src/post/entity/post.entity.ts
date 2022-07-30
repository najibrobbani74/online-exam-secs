import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    id_class: string

    @Column()
    email: string

    @Column()
    message: string

    @Column({ type: "text", array: true, default: [] })
    comments: string[]
}