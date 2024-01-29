import { z } from "zod";
import { CreateUserImageSchema } from "../schemas/image.schema";

type ImageType = z.infer<typeof CreateUserImageSchema>["body"];

export { ImageType };
