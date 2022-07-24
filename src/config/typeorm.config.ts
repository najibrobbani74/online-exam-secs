import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'online-exam-app',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true
}
