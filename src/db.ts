import { DataSource } from "typeorm";
import { Users, Images, Projects, Skills, Socials } from "./entities";

const { HOST_DB, USERNAME_DB, PASSWORD_DB, DATABASE_DB, PORT_DB, NODE_ENV } =
  process.env;

const conn = {
  entities: [Users, Images, Projects, Skills, Socials],
  synchronize: true,
};
const connDB = NODE_ENV === "test";
let AppDataSource: DataSource;
if (connDB) {
  AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    ...conn,
  });
} else {
  AppDataSource = new DataSource({
    type: "postgres",
    host: HOST_DB as string,
    port: Number(PORT_DB),
    username: USERNAME_DB as string,
    password: PASSWORD_DB as string,
    database: DATABASE_DB as string,
    ...conn,
  });
}
export { AppDataSource };
