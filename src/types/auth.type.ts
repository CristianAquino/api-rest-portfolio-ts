import { z } from "zod";
import { UpdateUserSchema, UserLoginSchema } from "../schemas";

type LoginType = z.infer<typeof UserLoginSchema>["body"];
type HeadAuthorizationTye = z.infer<typeof UpdateUserSchema>["headers"];

export { HeadAuthorizationTye, LoginType };
