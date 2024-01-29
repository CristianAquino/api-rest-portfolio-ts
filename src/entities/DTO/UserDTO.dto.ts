import { ImagesDTO } from ".";
import { Projects } from "../Projects.entity";
import { Skills } from "../Skills.entity";
import { Socials } from "../Socials.entity";
import { Users } from "../Users.entity";

export class UserDTO {
  id: string;
  name: string;
  first_name: string;
  second_name: string;
  description: string;
  email: string;
  cv_link: string;
  uuid: string | null;
  code: string | null;
  image: ImagesDTO;
  social: Socials[];
  project: Projects[];
  skill: Skills[];

  constructor(user: Users) {
    this.id = user.id;
    this.name = user.name;
    this.first_name = user.first_name;
    this.second_name = user.second_name;
    this.description = user.description;
    this.email = user.email;
    this.cv_link = user.cv_link;
    this.uuid = user.uuid;
    this.code = user.code;
    if (user.image) {
      this.image = new ImagesDTO(user.image);
    } else {
      this.image = user.image;
    }
    this.social = user.social;
    this.project = user.project;
    this.skill = user.skill;
  }
}
