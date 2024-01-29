import { Images, Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { ImageType, ParamsType, UpdateUserDataType } from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

async function UserInfo() {
  const user = await Users.find({
    relations: {
      image: true,
      social: true,
      project: true,
      skill: true,
    },
  });
  if (user.length == 0)
    throw new NoContentError("No records have been created yet");
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function UpdateDataUser({ data, uuid }: ParamsType<UpdateUserDataType>) {
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NotFoundError("User not found");
  const userUpdate = await Users.update({ uuid }, data);
  if (userUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");
  return "user updated";
}

async function UploadImageUser({ uuid, data }: ParamsType<ImageType>) {
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NotFoundError("User not found");
  const image = new Images();
  image.thumbnail = data.thumbnail;
  image.small = "";
  const newImage = await image.save();
  user.image = newImage;
  await user.save();

  return "image upload";
}

async function UpdateImageUser({ uuid, data }: ParamsType<ImageType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.image", "images")
    .where("users.uuid = :uuid", { uuid })
    .getOne();
  if (!user) throw new NotFoundError("User not found");
  const image = await Images.findOneBy({ id: user.image.id });
  if (!image) throw new NotFoundError("Image not found");
  const imageUpdate = await Images.update(
    { id: user.image.id },
    {
      thumbnail: data.thumbnail,
      small: "",
    }
  );
  if (imageUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");
  return "image update";
}

export { UpdateDataUser, UserInfo, UploadImageUser, UpdateImageUser };
