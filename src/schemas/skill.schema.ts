import { z } from "zod";
import { BaseHeaderSchema } from "./auth.schema";
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
      required_error: "thumbnail link is required",
    })
    .nonempty({ message: "thumbnail link is required" })
    .trim()
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
      message: "invalid route",
    }),
  type: z.nativeEnum(TypeSkill),
});

export const CreateSkillSchema = z.object({
  body: z.array(BaseDataSkillSchema),
  headers: BaseHeaderSchema,
});

export const UpdateSkillSchema = z.object({
  body: z.array(
    BaseDataSkillSchema.extend({
      id: z
        .string({
          required_error: "id is required",
          invalid_type_error: "id must be a string",
        })
        .uuid({ message: "invalid format" }),
    })
  ),
  headers: BaseHeaderSchema,
});
