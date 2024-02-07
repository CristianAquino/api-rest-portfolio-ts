import { z } from "zod";
import {
  CreateProjectSchema,
  UpdateImageProjectSchema,
  UpdateProjectSchema,
  UpdateSkillsProjectSchema,
} from "../schemas";

type ProjectCreateType = z.infer<typeof CreateProjectSchema>["body"];
type ProjectUpdateType = z.infer<typeof UpdateProjectSchema>["body"];
type ProjectUpdateImageType = z.infer<typeof UpdateImageProjectSchema>["body"];
type ProjectUpdateSkillsType = z.infer<
  typeof UpdateSkillsProjectSchema
>["body"];

export {
  ProjectCreateType,
  ProjectUpdateType,
  ProjectUpdateImageType,
  ProjectUpdateSkillsType,
};
