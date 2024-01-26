import { Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { UpdateUserDataType } from "../types";
import { NotFoundError, UpdatedError, confirmToken } from "../utils";

async function UserInfo() {
  const user = await Users.find();
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function UpdateDataUser({
  data,
  token,
}: {
  data: UpdateUserDataType;
  token: string;
}) {
  const decode: any = confirmToken(token);
  const { id: uuid } = decode;
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NotFoundError("User not found");
  const userUpdate = await Users.update({ uuid }, data);
  if (userUpdate.affected === 0)
    throw new UpdatedError("Could not update the user");
  return "user updated";
}

export { UpdateDataUser, UserInfo };
