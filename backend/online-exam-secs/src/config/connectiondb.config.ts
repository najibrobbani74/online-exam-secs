import { DataSource } from "typeorm"
import { Classes } from "src/classes/entity/classes.entity"
import { Forms } from "src/forms/entity/forms.entity"
import { Post } from "@/post/entity/post.entity"
import { User } from "@/auth/entity/auth.entity"
import { DBHOST, DBNAME, DBPASSWORD, DBPORT, DBUSERNAME } from "./all.config"
const dataSource = new DataSource(
    {
        // url: "postgres://lrcerexfbelyle:f556de33f50a98ce95001ed61fc563cc018521d80498fdbe311bece026d550a0@ec2-54-161-255-125.compute-1.amazonaws.com:5432/dd96t00bn0rsmm",
        type: "postgres",
        host: DBHOST,
        port: DBPORT,
        username: DBUSERNAME,
        password: DBPASSWORD,
        database: DBNAME,
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [
            User, Classes, Forms, Post
        ],
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        synchronize: true,
        // type: "postgres",
        // host: "localhost",
        // port: 5432,
        // username: "postgres",
        // password: "najibrobbani74",
        // database: "online-exam-app",
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // synchronize: true,
    }
)
dataSource.initialize()
    .then(() => {
        // console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export const classesRepository = dataSource.getRepository(Classes)
export const formsRepository = dataSource.getRepository(Forms)
export const postRepository = dataSource.getRepository(Post)