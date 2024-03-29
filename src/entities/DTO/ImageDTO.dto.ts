import { Images } from "../Images.entity";

export class ImagesDTO {
  id: string;
  thumbnail: string;
  small: string;

  constructor(image: Images) {
    this.id = image.id;
    this.thumbnail = image.thumbnail;
    this.small = image.small;
  }
}
