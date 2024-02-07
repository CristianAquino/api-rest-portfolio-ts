import { z } from "zod";
import {
  BaseAuthorizationUserSchema,
  ChangePasswordUserSchema,
  IdentifierIdSchema,
  SigninUserSchema,
} from "../schemas";

type ParamsType<T> = {
  data: T;
  uuid: string;
};

type SigninUserType = z.infer<typeof SigninUserSchema>["body"];
type HeaderAuthorizationUserTye = z.infer<typeof BaseAuthorizationUserSchema>;
type ChangePasswordUserType = z.infer<typeof ChangePasswordUserSchema>["body"];
type IdentifierIdType = z.infer<typeof IdentifierIdSchema>["params"];

export {
  ChangePasswordUserType,
  HeaderAuthorizationUserTye,
  IdentifierIdType,
  ParamsType,
  SigninUserType,
};
