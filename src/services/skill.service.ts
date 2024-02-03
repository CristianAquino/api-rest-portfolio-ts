import { Skills, Users } from "../entities";
import { ParamsType, SkillCreateType, SkillUpdateType } from "../types";
import { NoContentError } from "../utils";

async function allSkillDataService() {
  const skill = await Skills.find();

  if (skill.length == 0) {
    return [];
  } else {
    return skill;
  }
}

async function meSkillDataService({ uuid }: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) return user;

  return user.skills;
}

async function createSkillService({ uuid, data }: ParamsType<SkillCreateType>) {
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

async function updateSkillService({ data, uuid }: ParamsType<SkillUpdateType>) {
  let notfound: string[] = [];

  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data skill user not found");

  const mySkills = user.skills.map((skill) => skill.id);

  for (const item of data) {
    const { id, ...sf } = item;

    if (!mySkills.includes(id)) {
      notfound.push(item.id);
      continue;
    }

    await Skills.update({ id }, { ...sf });
  }

  if (notfound.length == 0) {
    return "updated skills";
  } else {
    return notfound;
  }
}

async function deleteSkillService({ id, uuid }: { id: string; uuid: string }) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.skills", "skills")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const mySkills = user.skills.map((skill) => skill.id);

  if (mySkills.includes(id)) {
    const skill = await Skills.findOneBy({ id });

    await skill?.remove();

    return `skill with ${id} is deleted`;
  } else {
    throw new NoContentError("skill not found");
  }
}

export {
  allSkillDataService,
  createSkillService,
  deleteSkillService,
  meSkillDataService,
  updateSkillService,
};
