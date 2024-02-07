import { z } from "zod";
import { BaseAuthorizationUserSchema, id } from "./auth.schema";
import { BaseDataImageSchema, thumbnail } from "./image.schema";

export const BaseDataProjectSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    })
    .nonempty({ message: "title is required" })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(64, { message: "max length must be 64" }),
  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description must be a string",
    })
    .nonempty({ message: "description is required" })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(200, { message: "max length must be 200" }),
  link: z
    .string({
      required_error: "link is required",
    })
    .nonempty({ message: "link is required" })
    .trim()
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
      message: "invalid route",
    }),
});

export const CreateProjectSchema = z.object({
  body: BaseDataProjectSchema.extend({
    thumbnail,
    skills: z.array(
      z
        .string({
          required_error: "id is required",
          invalid_type_error: "id must be a string",
        })
        .trim()
        .uuid({ message: "invalid format" })
    ),
  }),
  headers: BaseAuthorizationUserSchema,
});

export const UpdateProjectSchema = z.object({
  body: BaseDataProjectSchema.extend({ id }),
  headers: BaseAuthorizationUserSchema,
});

export const UpdateImageProjectSchema = z.object({
  body: z.object({
    id,
    image: BaseDataImageSchema,
  }),
  headers: BaseAuthorizationUserSchema,
});

export const UpdateSkillsProjectSchema = z.object({
  body: z.object({
    id,
    skills: z.array(
      z
        .string({
          required_error: "id is required",
          invalid_type_error: "id must be a string",
        })
        .trim()
        .uuid({ message: "invalid format" })
    ),
  }),
  headers: BaseAuthorizationUserSchema,
});
