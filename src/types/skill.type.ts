import { z } from "zod";
import { CreateSkillSchema, UpdateSkillSchema } from "../schemas";

type SkillCreateType = z.infer<typeof CreateSkillSchema>["body"];
type SkillUpdateType = z.infer<typeof UpdateSkillSchema>["body"];

export { SkillCreateType, SkillUpdateType };
