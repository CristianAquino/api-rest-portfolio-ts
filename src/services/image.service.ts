import { Images } from "../entities";
import { NoContentError } from "../utils";

async function allImageInfo() {
  const images = await Images.find();
  if (images.length == 0)
    throw new NoContentError("No records have been created yet");

  return images;
}

export { allImageInfo };
