import { Socials, Users } from "../entities";
import { ParamsType, SocialCreateType, SocialUpdateType } from "../types";
import { NoContentError } from "../utils";

async function allSocialData() {
  const social = await Socials.find();
  if (social.length == 0)
    throw new NoContentError("No records have been created yet");
  return social;
}

async function createUserSocial({ uuid, data }: ParamsType<SocialCreateType>) {
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

async function updateDataSocial({
  data,
}: Pick<ParamsType<SocialUpdateType>, "data">) {
  let notfound: string[] = [];
  for (const item of data) {
    const social = await Socials.findOneBy({ id: item.id });
    if (!social) {
      notfound.push(item.id);
      continue;
    }
    social.name = item.name;
    social.link = item.link;
    social.color = item.color;
    await social.save();
  }
  if (notfound.length == 0) {
    return "updated social";
  } else {
    return notfound;
  }
}

async function deleteDataSocial({ id }: { id: string }) {
  const social = await Socials.findOneBy({ id });
  if (!social) throw new NoContentError("social not found");
  await social.remove();
  return `social with ${id} is deleted`;
}

export { allSocialData, createUserSocial, updateDataSocial, deleteDataSocial };
