import { DataSource } from "typeorm";
import { Users, Images, Projects, Skills, Socials } from "./entities";

const { HOST_DB, USERNAME_DB, PASSWORD_DB, DATABASE_DB, PORT_DB, NODE_ENV } =
  process.env;

const conn = {
  entities: [Users, Images, Projects, Skills, Socials],
  synchronize: true,
};

let AppDataSource: DataSource;

switch (NODE_ENV) {
  case "test":
    AppDataSource = new DataSource({
      type: "sqlite",
      database: "db-test.sqlite",
      ...conn,
    });
    break;
  case "dev":
    AppDataSource = new DataSource({
      type: "sqlite",
      database: "db-dev.sqlite",
      ...conn,
    });
    break;
  default:
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
