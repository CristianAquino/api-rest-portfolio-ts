import { z } from "zod";
import { CreateDataSocialSchema, UpdateDataSocialSchema } from "../schemas";

type CreateDataSocialType = z.infer<typeof CreateDataSocialSchema>["body"];
type UpdateDataSocialType = z.infer<typeof UpdateDataSocialSchema>["body"];

export { CreateDataSocialType, UpdateDataSocialType };
