import { z } from "zod";
import { BaseHeaderSchema } from "./auth.schema";

export const thumbnail = z
  .string({
    required_error: "thumbnail link is required",
  })
  .nonempty({ message: "thumbnail link is required" })
  .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
    message: "invalid route",
  });

export const BaseDataImageSchema = z.object({
  thumbnail,
});

export const CreateUserImageSchema = z.object({
  body: BaseDataImageSchema,
  headers: BaseHeaderSchema,
});
