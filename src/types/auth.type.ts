import { z } from "zod";
import {
  BaseHeaderSchema,
  ChangeUserPasswordSchema,
  UserLoginSchema,
} from "../schemas";

type ParamsType<T> = {
  data: T;
  uuid: string;
};

type LoginType = z.infer<typeof UserLoginSchema>["body"];
type HeaderAuthorizationTye = z.infer<typeof BaseHeaderSchema>;
type ChangePasswordType = z.infer<typeof ChangeUserPasswordSchema>["body"];

export { ChangePasswordType, HeaderAuthorizationTye, LoginType, ParamsType };
