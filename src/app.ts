// import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import {
  authRoute,
  userRoute,
  imageRoute,
  socialRoute,
  skillRoute,
  projectRoute,
} from "./routes";
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
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/image", imageRoute);
app.use("/api/v1/social", socialRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/project", projectRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

// errors
app.use(handleError);
export { app };
