import { Images, Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { ImageType, ParamsType, UpdateDataUserType } from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

// se realizan dos llamadas
// 1. Obtener todos los usuarios
// 2. Obtener los projectos
async function oneUserService() {
  const user = await Users.find({
    relations: {
      image: true,
      socials: true,
      skills: true,
    },
  });

  if (user.length == 0)
    throw new NoContentError("No records have been created yet");

  const userDTO = user.map((user) => new UserDTO(user));

  return userDTO;
}

async function updateDataUserService({
  data,
  uuid,
}: ParamsType<UpdateDataUserType>) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found");

  const userUpdate = await Users.update({ uuid }, data);

  if (userUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");

  return "user updated";
}

// async function UploadImageUser({ uuid, data }: ParamsType<ImageType>) {
//   const user = await Users.findOneBy({ uuid });
//   if (!user) throw new NotFoundError("User not found");
//   const image = new Images();
//   image.thumbnail = data.thumbnail;
//   const newImage = await image.save();
//   user.image = newImage;
//   await user.save();

//   return "image upload";
// }

async function UpdateImageUserService({ uuid, data }: ParamsType<ImageType>) {
  const { id, ...sf } = data;
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.image", "images")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NotFoundError("User not found");
  if (user.image.id !== id) throw new NotFoundError("Image not found");

  const imageUpdate = await Images.update({ id }, sf);

  if (imageUpdate.affected === 0)
    throw new UpdatedError("Could not update the user image");

  return "image update";
}

export {
  UpdateImageUserService,
  // UploadImageUser,
  oneUserService,
  updateDataUserService,
};
