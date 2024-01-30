import { Socials } from "../Socials.entity";

export class SocialDTO {
  id: string;
  name: string;
  link: string;
  constructor(social: Socials) {
    this.id = social.id;
    this.name = social.name;
    this.link = social.link;
  }
}
