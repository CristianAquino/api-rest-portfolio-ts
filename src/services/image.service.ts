import { Images } from "../entities";

async function allDataImageService() {
  const images = await Images.find();

  if (images.length == 0) {
    return "No images created yet";
  } else {
    return images;
  }
}

export { allDataImageService };
