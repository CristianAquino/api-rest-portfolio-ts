import { z } from "zod";
import { BaseHeaderSchema } from "./auth.schema";

export const BaseDataImageSchema = z.object({
  id: z
    .string({
      required_error: "id is required",
      invalid_type_error: "id must be a string",
    })
    .trim()
    .uuid({ message: "invalid format" }),
  thumbnail: z
    .string({
      required_error: "thumbnail link is required",
    })
    .nonempty({ message: "thumbnail link is required" })
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
      message: "invalid route",
    }),
});

export const CreateUserImageSchema = z.object({
  body: BaseDataImageSchema,
  headers: BaseHeaderSchema,
});
