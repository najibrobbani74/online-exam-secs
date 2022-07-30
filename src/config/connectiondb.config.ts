import { DataSource } from "typeorm"
import { Classes } from "src/classes/entity/classes.entity"
import { Forms } from "src/forms/entity/forms.entity"
import { Post } from "@/post/entity/post.entity"
const dataSource = new DataSource(
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "najibrobbani74",
        database: "online-exam-app",
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
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