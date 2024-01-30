import { z } from "zod";
import { BaseHeaderSchema } from "./auth.schema";

export const BaseDataSocialSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(64, { message: "max length must be 64" }),
  link: z
    .string({
      required_error: "thumbnail link is required",
    })
    .nonempty({ message: "thumbnail link is required" })
    .trim()
    .regex(/^(http|https):\/\/[^\s/$.?#].[^\s]*$/gi, {
      message: "invalid route",
    }),
  color: z
    .string({
      required_error: "color is required",
      invalid_type_error: "color must be a string",
    })
    .trim()
    .min(4, { message: "min length must be 4" })
    .max(7, { message: "max length must be 7" })
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gi, {
      message: "invalid color",
    }),
});

export const CreateSocialSchema = z.object({
  body: z.array(BaseDataSocialSchema),
  headers: BaseHeaderSchema,
});

// en el frontend colocar un boton de edit
// luego colocar un boton que realice
// la accion de actualizar
export const UpdateSocialSchema = z.object({
  body: z.array(
    BaseDataSocialSchema.extend({
      id: z
        .string({
          required_error: "id is required",
          invalid_type_error: "id must be a string",
        })
        .uuid({ message: "invalid format" }),
    })
  ),
  headers: BaseHeaderSchema,
});
