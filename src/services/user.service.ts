import { Users } from "../entities";
import { UserDTO } from "../entities/DTO";

async function UserInfo() {
  const user = await Users.find();
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function InsertDataUser(user: Users) {
  const cUser = new Users();
  cUser.name = user.name;
  cUser.first_name = user.first_name;
  cUser.second_name = user.second_name;
  cUser.description = user.description;
  cUser.email = user.email;
  cUser.password = user.password;
  cUser.cv_link = user.cv_link;
  cUser.uuid = user.uuid;
  await cUser.save();
  return cUser;
}

async function UpdateDataUser(user: Users) {
  // return await Users.update(params.id, params);
}
export { UserInfo, InsertDataUser, UpdateDataUser };
