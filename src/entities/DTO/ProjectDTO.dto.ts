import { Projects } from "../Projects.entity";
import { ImagesDTO } from "./ImageDTO.dto";
import { SkillDTO } from "./SkillDTO.dto";

export class ProjectDTO {
  id: string;
  title: string;
  description: string;
  link: string;
  image: ImagesDTO;
  skills: SkillDTO[];

  constructor(project: Projects) {
    this.id = project.id;
    this.title = project.title;
    this.description = project.description;
    this.link = project.link;
    this.image = new ImagesDTO(project.image);
    this.skills = project.skills.map((s) => new SkillDTO(s));
  }
}
