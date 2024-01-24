import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";
import { AppDataSource } from "./db";
import { ConextionDBError } from "./utils";

const { PORT } = process.env;

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("database connected");
    app.listen(PORT, () =>
      console.log(`Server is running! in http://localhost:${PORT}`)
    );
  } catch (error) {
    throw new ConextionDBError("Could not connect to database");
  }
};

main();
