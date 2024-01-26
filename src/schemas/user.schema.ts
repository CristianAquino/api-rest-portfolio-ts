import { z } from "zod";

export const CreateUserSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(64, { message: "max length must be 64" }),
    first_name: z
      .string({
        required_error: "first name is required",
        invalid_type_error: "first name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(128, { message: "max length must be 64" }),
    second_name: z
      .string({
        required_error: "second name is required",
        invalid_type_error: "second name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(128, { message: "max length must be 64" }),
    description: z
      .string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(200, { message: "max length must be 200" }),
    email: z
      .string({ required_error: "email is required" })
      .email({ message: "invalid email" }),
    password: z
      .string({
        required_error: "password is required",
      })
      .trim()
      .min(8, { message: "min length must be 8" })
      .max(32, { message: "max length must be 32" }),
    cv_link: z
      .string({
        required_error: "cv link is required",
      })
      .nonempty({ message: "cv link is required" })
      .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
        message: "invalid route",
      }),
  }),
});

export const UpdateUserSchema = z.object({
  body: z.object({
    id: z.string().uuid({ message: "invalid id" }),
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(64, { message: "max length must be 64" }),
    first_name: z
      .string({
        required_error: "first name is required",
        invalid_type_error: "first name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(128, { message: "max length must be 64" }),
    second_name: z
      .string({
        required_error: "second name is required",
        invalid_type_error: "second name must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(128, { message: "max length must be 64" }),
    description: z
      .string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
      })
      .trim()
      .min(3, { message: "min length must be 3" })
      .max(200, { message: "max length must be 200" }),
    email: z
      .string({ required_error: "email is required" })
      .email({ message: "invalid email" }),
    cv_link: z
      .string({
        required_error: "cv link is required",
      })
      .nonempty({ message: "cv link is required" })
      .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
        message: "invalid route",
      }),
  }),
});
