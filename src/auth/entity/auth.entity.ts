import { Users } from 'src/users/entity/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RefreshTokenEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  isRevoked: boolean;

  @Column()
  expiredAt: Date;

  @ManyToOne(() => Users, (user) => user.refresh_token)
  user: Users;
}
