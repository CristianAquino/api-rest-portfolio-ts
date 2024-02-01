import { randomUUID } from "crypto";
import { Users } from "../entities";
import {
  ChangePasswordUserType,
  ParamsType,
  SigninUserType,
  SignupUserType,
} from "../types";
import {
  CreatedError,
  NotFoundError,
  ResendEmailError,
  comparePassword,
  createToken,
  encryptPassword,
  sendCodeWithEmail,
} from "../utils";

async function signinUserService({
  data,
}: Pick<ParamsType<SigninUserType>, "data">) {
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

async function signupUserService({
  data,
}: Pick<ParamsType<SignupUserType>, "data">) {
  const user = new Users();
  const hashPassword = await encryptPassword(data.password);
  user.name = data.name;
  user.first_name = data.first_name;
  user.second_name = data.second_name;
  user.description = data.description;
  user.email = data.email;
  user.password = hashPassword;
  user.cv_link = data.cv_link;

  const newUser = await user.save();

  if (!newUser) throw new CreatedError("Could not register in the database");

  return "user created";
}

async function logoutUserService({ uuid }: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found");

  user.uuid = null;

  await user.save();

  return "user logout";
}

async function codeChangePasswordUserService({
  uuid,
}: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found");

  user.code = "" + Math.floor(Math.random() * (9999 - 1000) + 1000);

  const { error } = await sendCodeWithEmail({ data: user });

  if (error !== null) {
    throw new ResendEmailError(error?.message);
  }

  user.save();

  return "Check your email and enter the generated code";
}

async function changePasswordUserService({
  uuid,
  data,
}: ParamsType<ChangePasswordUserType>) {
  const { code, oldpassword, newpassword } = data;
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found");

  const matchPassword =
    user === null ? false : await comparePassword(oldpassword, user.password);

  if (!matchPassword)
    throw new NotFoundError(
      "Your old password is not registered in our system, please try again"
    );

  if (user.code !== code) throw new NotFoundError("Entered code is incorrect");

  const hashPassword = await encryptPassword(newpassword);
  user.password = hashPassword;
  user.code = null;

  user.save();

  return "Password changed";
}
export {
  changePasswordUserService,
  codeChangePasswordUserService,
  logoutUserService,
  signinUserService,
  signupUserService,
};
