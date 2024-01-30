import { Skills, Users } from "../entities";
import { ParamsType, SkillCreateType, SkillUpdateType } from "../types";
import { NoContentError } from "../utils";

async function allSkillData() {
  const skill = await Skills.find();
  if (skill.length == 0)
    throw new NoContentError("No records have been created yet");
  return skill;
}

async function createUserSkill({ uuid, data }: ParamsType<SkillCreateType>) {
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NoContentError("User not found");
  for (const item of data) {
    const skill = new Skills();
    skill.name = item.name;
    skill.icon = item.icon;
    skill.type = item.type;
    skill.user = user;
    await skill.save();
  }
  return "created skill";
}

async function updateDataSkill({
  data,
}: Pick<ParamsType<SkillUpdateType>, "data">) {
  let notfound: string[] = [];
  for (const item of data) {
    const { id, ...sf } = item;
    const skill = await Skills.findOneBy({ id });
    if (!skill) {
      notfound.push(item.id);
      continue;
    }
    await Skills.update({ id }, { ...sf });
  }
  if (notfound.length == 0) {
    return "updated skill";
  } else {
    return notfound;
  }
}

async function deleteDataSkill({ id }: { id: string }) {
  const skill = await Skills.findOneBy({ id });
  if (!skill) throw new NoContentError("skill not found");
  await skill.remove();
  return `skill with ${id} is deleted`;
}

export { allSkillData, createUserSkill, deleteDataSkill, updateDataSkill };
