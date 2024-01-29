import { z } from "zod";

export const CreateUserImageSchema = z.object({
  body: z.object({
    thumbnail: z
      .string({
        required_error: "thumbnail link is required",
      })
      .nonempty({ message: "thumbnail link is required" })
      .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
        message: "invalid route",
      }),
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
