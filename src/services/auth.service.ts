import { Users } from "../entities";
import { LoginType, UserRegisterType } from "../types";
import {
  CreatedError,
  NotFoundError,
  comparePassword,
  createToken,
  encryptPassword,
} from "../utils";
import { randomUUID } from "crypto";

async function loginUser(data: LoginType) {
  const { email, password } = data;
  const user = (await Users.findOneBy({ email })) as Users;
  const matchPassword =
    user === null ? false : await comparePassword(password, user.password);
  if (!matchPassword) throw new NotFoundError("Password or email not found");
  user.uuid = randomUUID();

  const signToken = {
    id: user.uuid,
  };
  const expire = 60 * 60;
  const token = createToken(signToken, expire);
  if (!token) throw new CreatedError("Could not create the token");
  await user.save();
  return token;
}

async function insertDataUser(user: UserRegisterType) {
  const cUser = new Users();
  const hashPassword = await encryptPassword(user.password);
  cUser.name = user.name;
  cUser.first_name = user.first_name;
  cUser.second_name = user.second_name;
  cUser.description = user.description;
  cUser.email = user.email;
  cUser.password = hashPassword;
  cUser.cv_link = user.cv_link;

  const newU = await cUser.save();
  if (!newU) throw new CreatedError("Could not register in the database");
  return "user created";
}
export { loginUser, insertDataUser };
