import { z } from "zod";
import { BaseAuthorizationUserSchema } from "./auth.schema";
import { thumbnail } from "./image.schema";

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
});

export const CreateProjectSchema = z.object({
  body: z.array(BaseDataProjectSchema),
  headers: BaseAuthorizationUserSchema,
});

// export const UpdateProjectSchema = z.object({
//   body: BaseDataProjectSchema.extend({
//     id: z
//       .string({
//         required_error: "id is required",
//         invalid_type_error: "id must be a string",
//       })
//       .uuid({ message: "invalid format" }),
//   }),
//   headers: BaseHeaderSchema,
// });

export const UpdateProjectSchema = z.object({
  body: z.object({
    id: z
      .string({
        required_error: "id is required",
        invalid_type_error: "id must be a string",
      })
      .uuid({ message: "invalid format" }),
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
  }),
  headers: BaseAuthorizationUserSchema,
});
