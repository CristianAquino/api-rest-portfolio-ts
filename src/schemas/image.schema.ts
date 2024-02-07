import { z } from "zod";
import { BaseAuthorizationUserSchema, id } from "./auth.schema";

export const thumbnail = z
  .string({
    required_error: "thumbnail link is required",
  })
  .nonempty({ message: "thumbnail link is required" })
  .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
    message: "invalid route",
  });

export const BaseDataImageSchema = z.object({
  id,
  thumbnail,
});

export const SendDataImageSchema = z.object({
  body: BaseDataImageSchema,
  headers: BaseAuthorizationUserSchema,
});
