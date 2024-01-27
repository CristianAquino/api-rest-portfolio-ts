import { Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { UpdateUserDataType } from "../types";
import { NoContentError, NotFoundError, UpdatedError } from "../utils";

async function UserInfo() {
  const user = await Users.find();
  if (user.length == 0)
    throw new NoContentError("No records have been created yet");
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function UpdateDataUser({
  data,
  uuid,
}: {
  data: UpdateUserDataType;
  uuid: string;
}) {
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NotFoundError("User not found");
  const userUpdate = await Users.update({ uuid }, data);
  if (userUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");
  return "user updated";
}

export { UpdateDataUser, UserInfo };
