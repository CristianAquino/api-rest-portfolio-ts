import { Images, Users } from "../entities";
import { AllUserDTO, UserDTO } from "../entities/DTO";
import { ImageType, ParamsType, UpdateDataUserType } from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

// se realizan dos llamadas
// 1. Obtener todos los usuarios
// 2. Obtener los projectos
async function allUserDataService() {
  const user = await Users.find({
    relations: {
      image: true,
      socials: true,
      skills: true,
    },
  });

  if (user.length == 0) {
    return [];
  } else {
    const userDTO = user.map((user) => new AllUserDTO(user));

    return userDTO;
  }
}

async function meUserDataService({ uuid }: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.image", "images")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const userDTO = new UserDTO(user);

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

async function updateImageUserService({ uuid, data }: ParamsType<ImageType>) {
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
  allUserDataService,
  meUserDataService,
  updateDataUserService,
  updateImageUserService,
};
