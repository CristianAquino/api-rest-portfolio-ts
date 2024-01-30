import { z } from "zod";
import {
  BaseHeaderSchema,
  ChangeUserPasswordSchema,
  IdentifierIdSchema,
  UserLoginSchema,
} from "../schemas";

type ParamsType<T> = {
  data: T;
  uuid: string;
};

type LoginType = z.infer<typeof UserLoginSchema>["body"];
type HeaderAuthorizationTye = z.infer<typeof BaseHeaderSchema>;
type ChangePasswordType = z.infer<typeof ChangeUserPasswordSchema>["body"];
type IdType = z.infer<typeof IdentifierIdSchema>["params"];

export {
  ChangePasswordType,
  HeaderAuthorizationTye,
  LoginType,
  ParamsType,
  IdType,
};
