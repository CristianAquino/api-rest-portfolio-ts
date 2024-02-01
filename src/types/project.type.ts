import { z } from "zod";
import { CreateProjectSchema, UpdateProjectSchema } from "../schemas";

type ProjectCreateType = z.infer<typeof CreateProjectSchema>["body"];
type ProjectUpdateType = z.infer<typeof UpdateProjectSchema>["body"];

export { ProjectCreateType, ProjectUpdateType };
