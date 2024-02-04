import { Socials, Users } from "../entities";
import {
  CreateDataSocialType,
  ParamsType,
  UpdateDataSocialType,
} from "../types";
import { NoContentError } from "../utils";

async function allSocialDataUserService() {
  const social = await Socials.find();

  if (social.length == 0) {
    return [];
  } else {
    return social;
  }
}

async function meSocialDataUserService({
  uuid,
}: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.socials", "socials")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) return user;

  return user.socials;
}

async function createSocialUserService({
  uuid,
  data,
}: ParamsType<CreateDataSocialType>) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NoContentError("User not found");

  for (const item of data) {
    const social = new Socials();

    social.name = item.name;
    social.link = item.link;
    social.color = item.color;
    social.user = user;

    await social.save();
  }

  return "created social";
}

async function updateSocialUserService({
  uuid,
  data,
}: ParamsType<UpdateDataSocialType>) {
  let notfound: string[] = [];

  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.socials", "socials")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const mySocials = user.socials.map((social) => social.id);

  if (mySocials.includes(data.id)) {
    const { id, ...sf } = data;

    const updatesocial = await Socials.update({ id }, { ...sf });

    if (updatesocial.affected === 0)
      throw new NoContentError("social not found");

    return "updated social";
  } else {
    throw new NoContentError("project not found");
  }
}

async function deleteSocialUserService({
  id,
  uuid,
}: {
  id: string;
  uuid: string;
}) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.socials", "socials")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const mySocials = user.socials.map((social) => social.id);

  if (mySocials.includes(id)) {
    const social = await Socials.findOneBy({ id });

    await social?.remove();

    return `social with ${id} is deleted`;
  } else {
    throw new NoContentError("social not found");
  }
}

export {
  allSocialDataUserService,
  createSocialUserService,
  deleteSocialUserService,
  meSocialDataUserService,
  updateSocialUserService,
};
