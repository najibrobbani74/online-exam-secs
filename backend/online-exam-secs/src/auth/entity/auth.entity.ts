import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public uid: string;

  @Column({ type: "enum", enum: Role, nullable: true })
  public role: Role;

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
