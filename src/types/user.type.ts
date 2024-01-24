import { z } from "zod";
import { CreateUserSchema } from "../schemas";

type UserRegisterType = z.infer<typeof CreateUserSchema>["body"];

export { UserRegisterType };
