import { z } from "zod";
import { CreateSocialSchema, UpdateSocialSchema } from "../schemas";

type SocialCreateType = z.infer<typeof CreateSocialSchema>["body"];
type SocialUpdateType = z.infer<typeof UpdateSocialSchema>["body"];

export { SocialCreateType, SocialUpdateType };
