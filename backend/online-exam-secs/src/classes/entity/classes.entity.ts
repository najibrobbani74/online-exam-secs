import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classes extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    // @Column()
    // invite_link: string

    @Column('simple-array', { nullable: true })
    id_forms: string[];
}