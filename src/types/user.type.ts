import { z } from "zod";
import { BaseDataUserSchema, CreateUserSchema } from "../schemas";

type UserRegisterType = z.infer<typeof CreateUserSchema>["body"];
type UpdateUserDataType = z.infer<typeof BaseDataUserSchema>;

export { UpdateUserDataType, UserRegisterType };
