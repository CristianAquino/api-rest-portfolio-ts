import { z } from "zod";
import { HeaderValidateSchema } from "../schemas";

type ParamsType<T> = {
  data: T;
  uuid: string;
};

type HeaderAuthorizationTye = z.infer<typeof HeaderValidateSchema>["headers"];

export { HeaderAuthorizationTye, ParamsType };
