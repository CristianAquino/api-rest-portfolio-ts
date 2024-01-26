import { z } from "zod";
import { LogoutUserSchema, UserLoginSchema } from "../schemas";

type LoginType = z.infer<typeof UserLoginSchema>["body"];
type HeadAuthorizationTye = z.infer<typeof LogoutUserSchema>["headers"];

export { HeadAuthorizationTye, LoginType };
