import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public uid: string;

  @Column({ nullable: true, default: null })
  public role: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ nullable: true, default: null })
  public id_class: string;

  @Column()
  public password: string;

  @Column({ nullable: true })
  public refresh_token: string | null;
}
