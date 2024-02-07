import { z } from "zod";
import { BaseDataUserSchema, SignupUserSchema } from "../schemas";

type SignupUserType = z.infer<typeof SignupUserSchema>["body"];
type UpdateDataUserType = z.infer<typeof BaseDataUserSchema>;

export { UpdateDataUserType, SignupUserType };
