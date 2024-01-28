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

export const HeaderValidateSchema = z.object({
  headers: z.object({
    authorization: z
      .string({
        required_error: "authorization is required",
        invalid_type_error: "authorization must be a string",
      })
      .refine(
        (value) => {
          const head = value.split(" ")[0];
          return head.toLocaleLowerCase() === "bearer" ? true : false;
        },
        { message: "authorization header is invalid" }
      ),
  }),
});

export const ChangeUserPasswordSchema = z.object({
  body: z
    .object({
      code: z
        .string({ required_error: "code is required" })
        .regex(/^\d{4}$/gi, { message: "invalid code" }),
      oldpassword: z
        .string({
          required_error: "password is required",
        })
        .trim()
        .min(8, { message: "min length must be 8" })
        .max(32, { message: "max length must be 32" }),
      newpassword: z
        .string({
          required_error: "password is required",
        })
        .trim()
        .min(8, { message: "min length must be 8" })
        .max(32, { message: "max length must be 32" }),
    })
    .refine((data) => data.newpassword !== data.oldpassword, {
      message: "New password must be different from old password",
      path: ["newpassword"],
    }),
  headers: z.object({
    authorization: z
      .string({
        required_error: "authorization is required",
        invalid_type_error: "authorization must be a string",
      })
      .refine(
        (value) => {
          const head = value.split(" ")[0];
          return head.toLocaleLowerCase() === "bearer" ? true : false;
        },
        { message: "authorization header is invalid" }
      ),
  }),
});

export const IdentifierIdSchema = z
  .string({
    required_error: "id is required",
    invalid_type_error: "id must be a string",
  })
  .uuid({ message: "invalid format" });
