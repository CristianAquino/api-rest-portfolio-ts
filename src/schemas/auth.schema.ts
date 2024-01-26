import { z } from "zod";

export const UserLoginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "email is required" })
      .trim()
      .email({ message: "invalid email" }),
    password: z
      .string({
        required_error: "password is required",
      })
      .trim()
      .min(8, { message: "min length must be 8" })
      .max(32, { message: "max length must be 32" }),
  }),
});
