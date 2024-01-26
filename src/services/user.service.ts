import { Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { UpdateUserDataType } from "../types";
import { NotFoundError, UpdatedError } from "../utils";

async function UserInfo() {
  const user = await Users.find();
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function UpdateDataUser(data: UpdateUserDataType) {
  const { id, ...rest } = data;
  const user = await Users.findOneBy({ id });
  if (!user) throw new NotFoundError("User not found");
  const userUpdate = await Users.update(id, rest);
  if (userUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");
  return "user updated";
}

export { UpdateDataUser, UserInfo };
