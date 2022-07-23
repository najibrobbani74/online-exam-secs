import { EntityRepository, Repository } from 'typeorm';
import { RegisterDto } from '../dto/register.dto';
import { Users } from '../entity/users.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {

  async registerUser(registerDto: RegisterDto): Promise<void> {
    const { name, email, id_class, password } = registerDto;

    let user = this.create();
    user.name = name;
    user.email = email;
    user.id_class = id_class;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await this.save(user);
    } catch (e) {
      console.log(e);
    }
  }
}
