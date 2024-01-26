import { z } from "zod";
import { UserLoginSchema } from "../schemas";

type LoginType = z.infer<typeof UserLoginSchema>["body"];

export { LoginType };
