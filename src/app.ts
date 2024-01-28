// import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { imageRoute } from "./routes";
import { handleError } from "./middlewares";
const app = express();

// middlewars
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
// app.use(logs);

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.use("/api/v1/image", imageRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

// errors
app.use(handleError);
export { app };
