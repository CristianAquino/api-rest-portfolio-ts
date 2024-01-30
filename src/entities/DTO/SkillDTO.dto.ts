import { Skills } from "../Skills.entity";

export class SkillDTO {
  id: string;
  name: string;
  icon: string;
  type: string;
  constructor(skill: Skills) {
    this.id = skill.id;
    this.name = skill.name;
    this.icon = skill.icon;
    this.type = skill.type;
  }
}
