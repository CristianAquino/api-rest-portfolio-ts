import { z } from "zod";
import { BaseAuthorizationUserSchema, id } from "./auth.schema";
import { TypeSkill } from "../types";

export const BaseDataSkillSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(64, { message: "max length must be 64" }),
  icon: z
    .string({
      required_error: "icon is required",
    })
    .nonempty({ message: "icon is required" })
    .trim()
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
      message: "invalid route",
    }),
  type: z.nativeEnum(TypeSkill),
});

export const CreateSkillSchema = z.object({
  body: z.array(BaseDataSkillSchema),
  headers: BaseAuthorizationUserSchema,
});

export const UpdateSkillSchema = z.object({
  body: BaseDataSkillSchema.extend({
    id,
  }),
  headers: BaseAuthorizationUserSchema,
});
