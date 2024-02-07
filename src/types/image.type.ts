import { z } from "zod";
import { BaseDataImageSchema } from "../schemas/image.schema";

type ImageType = z.infer<typeof BaseDataImageSchema>;

export { ImageType };
