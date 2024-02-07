import { Users } from "../Users.entity";
import { ImagesDTO } from "./ImageDTO.dto";

export class UserDTO {
  id: string;
  name: string;
  first_name: string;
  second_name: string;
  description: string;
  email: string;
  cv_link: string | null;
  image: ImagesDTO;

  constructor(user: Users) {
    this.id = user.id;
    this.name = user.name;
    this.first_name = user.first_name;
    this.second_name = user.second_name;
    this.description = user.description;
    this.email = user.email;
    this.cv_link = user.cv_link;
    this.image = new ImagesDTO(user.image);
  }
}
