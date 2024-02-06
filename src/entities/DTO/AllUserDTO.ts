import { ImagesDTO, SkillDTO, SocialDTO } from ".";
import { Users } from "../Users.entity";

export class AllUserDTO {
  id: string;
  name: string;
  first_name: string;
  second_name: string;
  description: string;
  email: string;
  cv_link: string | null;
  image: ImagesDTO;
  socials: SocialDTO[];
  skills: SkillDTO[];

  constructor(user: Users) {
    this.id = user.id;
    this.name = user.name;
    this.first_name = user.first_name;
    this.second_name = user.second_name;
    this.description = user.description;
    this.email = user.email;
    this.cv_link = user.cv_link;
    this.image = new ImagesDTO(user.image);
    this.socials = user.socials.map((s) => new SocialDTO(s)) ?? [];
    this.skills = user.skills.map((s) => new SkillDTO(s)) ?? [];
  }
}
