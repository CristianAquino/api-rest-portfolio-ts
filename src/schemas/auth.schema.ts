import { z } from "zod";

export const BaseHeaderSchema = z.object({
  authorization: z
    .string({
      required_error: "authorization is required",
      invalid_type_error: "authorization must be a string",
    })
    .trim()
    .refine(
      (value) => {
        const head = value.split(" ")[0];
        return head.toLocaleLowerCase() === "bearer" ? true : false;
      },
      { message: "authorization header is invalid" }
    ),
});

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
  headers: BaseHeaderSchema,
});

export const ChangeUserPasswordSchema = z.object({
  body: z
    .object({
      code: z
        .string({ required_error: "code is required" })
        .trim()
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
  headers: BaseHeaderSchema,
});

export const IdentifierIdSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "id is required",
        invalid_type_error: "id must be a string",
      })
      .trim()
      .uuid({ message: "invalid format" }),
  }),
  headers: BaseHeaderSchema,
});
