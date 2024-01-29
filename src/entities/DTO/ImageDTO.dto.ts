import { Images } from "../Images.entity";

export class ImagesDTO {
  thumbnail: string;
  small: string;

  constructor(image: Images) {
    this.thumbnail = image.thumbnail;
    this.small = image.small;
  }
}
