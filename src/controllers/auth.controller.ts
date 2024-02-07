import { NextFunction, Request, Response } from "express";
import {
  changePasswordUserService,
  codeChangePasswordUserService,
  logoutUserService,
  signinUserService,
  signupUserService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function postSigninUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await signinUserService({ data: req.body });
    return res.status(200).json({ token: response });
  } catch (error) {
    return next(error);
  }
}

async function postSignupUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await signupUserService({ data: req.body });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function getLogoutUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await logoutUserService({ uuid: req.id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function postCodeChangePasswordUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await codeChangePasswordUserService({ uuid: req.id });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putChangePasswordUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await changePasswordUserService({
      uuid: req.id,
      data: req.body,
    });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

export {
  getLogoutUserController,
  postCodeChangePasswordUserController,
  postSigninUserController,
  postSignupUserController,
  putChangePasswordUserController,
};
