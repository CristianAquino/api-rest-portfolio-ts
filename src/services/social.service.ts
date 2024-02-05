import { Socials, Users } from "../entities";
import {
  CreateDataSocialType,
  ParamsType,
  UpdateDataSocialType,
} from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

async function allSocialDataUserService() {
  const social = await Socials.find();

  if (social.length == 0) {
    return "No social created yet";
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

  if (!user) throw new NotFoundError("User not found, please try again");

  const socials = user.socials;

  return socials;
}

async function createSocialUserService({
  uuid,
  data,
}: ParamsType<CreateDataSocialType>) {
  const notfound = [];
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found, please try again");

  for (const item of data) {
    const social = new Socials();

    social.name = item.name;
    social.link = item.link;
    social.color = item.color;
    social.user = user;

    const newSocial = await social.save();

    if (!newSocial) {
      notfound.push(item);
    }
  }
  if (notfound.length > 0) {
    return notfound;
  } else {
    return "All created social";
  }
}

async function updateSocialUserService({
  uuid,
  data,
}: ParamsType<UpdateDataSocialType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.socials", "socials")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NotFoundError("User not found, please try again");

  const mySocials = user.socials.map((social) => social.id);

  if (mySocials.includes(data.id)) {
    const { id, ...sf } = data;

    const updateSocial = await Socials.update({ id }, { ...sf });

    if (updateSocial.affected === 0)
      throw new UpdatedError("Could not update the social, please try again");

    return "Updated social";
  } else {
    throw new NotFoundError("Project not found, please try again");
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

  if (!user) throw new NotFoundError("User not found, please try again");

  const mySocials = user.socials.map((social) => social.id);

  if (mySocials.includes(id)) {
    const social = await Socials.findOneBy({ id });

    await social?.remove();

    return `Social with ${id} is deleted`;
  } else {
    throw new NotFoundError("Social not found, please try again");
  }
}

export {
  allSocialDataUserService,
  createSocialUserService,
  deleteSocialUserService,
  meSocialDataUserService,
  updateSocialUserService,
};
