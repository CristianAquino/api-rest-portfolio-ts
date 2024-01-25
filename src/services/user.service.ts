import { Users } from "../entities";
import { UserDTO } from "../entities/DTO";
import { UserRegisterType } from "../types";
import { CreatedError } from "../utils";

async function UserInfo() {
  const user = await Users.find();
  const userDTO = user.map((user) => new UserDTO(user));
  return userDTO;
}

async function InsertDataUser(user: UserRegisterType) {
  const cUser = new Users();
  cUser.name = user.name;
  cUser.first_name = user.first_name;
  cUser.second_name = user.second_name;
  cUser.description = user.description;
  cUser.email = user.email;
  cUser.password = user.password;
  cUser.cv_link = user.cv_link;
  const newU = await cUser.save();
  if (!newU) throw new CreatedError("Could not register in the database");
  return "user created";
}

async function UpdateDataUser(user: Users) {
  // return await Users.update(params.id, params);
}
export { InsertDataUser, UpdateDataUser, UserInfo };
