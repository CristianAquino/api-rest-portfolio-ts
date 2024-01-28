import { z } from "zod";
import { CreateUserSchema, UpdateUserSchema } from "../schemas";

type UserRegisterType = z.infer<typeof CreateUserSchema>["body"];
type UpdateUserDataType = z.infer<typeof UpdateUserSchema>["body"];

export { UserRegisterType, UpdateUserDataType };
