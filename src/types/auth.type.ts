import { z } from "zod";
import {
  ChangeUserPasswordSchema,
  HeaderValidateSchema,
  UserLoginSchema,
} from "../schemas";

type ParamsType<T> = {
  data: T;
  uuid: string;
};

type LoginType = z.infer<typeof UserLoginSchema>["body"];
type HeaderAuthorizationTye = z.infer<typeof HeaderValidateSchema>["headers"];
type ChangePasswordType = z.infer<typeof ChangeUserPasswordSchema>["body"];

export { HeaderAuthorizationTye, LoginType, ChangePasswordType, ParamsType };
