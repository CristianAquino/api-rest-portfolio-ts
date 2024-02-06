import { Skills, Users } from "../entities";
import { ParamsType, SkillCreateType, SkillUpdateType } from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

async function allSkillDataService() {
  const skill = await Skills.find();

  if (skill.length == 0) {
    return "No skills created yet";
  } else {
    return skill;
  }
}

async function meSkillDataService({ uuid }: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user)
    throw new NotFoundError("No project created yet, please try again");

  const skills = user.skills;

  return skills;
}

async function createSkillService({ uuid, data }: ParamsType<SkillCreateType>) {
  const notfound = [];
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found, please try again");

  for (const item of data) {
    const skill = new Skills();

    skill.name = item.name;
    skill.icon = item.icon;
    skill.type = item.type;
    skill.user = user;

    const newSkill = await skill.save();

    if (!newSkill) {
      notfound.push(item);
    }
  }

  if (notfound.length > 0) {
    return notfound;
  } else {
    return "All created skill";
  }
}

async function updateSkillService({ data, uuid }: ParamsType<SkillUpdateType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NotFoundError("User not found, please try again");

  const mySkills = user.skills.map((skill) => skill.id);

  if (mySkills.includes(data.id)) {
    const { id, ...sf } = data;

    const updateSkill = await Skills.update({ id }, sf);

    if (updateSkill.affected === 0)
      throw new UpdatedError("Could not update the skill, please try again");

    return "Updated skill";
  } else {
    throw new NotFoundError("Project not found, please try again");
  }
}

async function deleteSkillService({ id, uuid }: { id: string; uuid: string }) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NotFoundError("User not found, please try again");

  const mySkills = user.skills.map((skill) => skill.id);

  if (mySkills.includes(id)) {
    const skill = await Skills.findOneBy({ id });

    await skill?.remove();

    return `Skill with ${id} is deleted`;
  } else {
    throw new NotFoundError("Skill not found, please try again");
  }
}

export {
  allSkillDataService,
  createSkillService,
  deleteSkillService,
  meSkillDataService,
  updateSkillService,
};
