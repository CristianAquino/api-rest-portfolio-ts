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
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
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
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getLogoutUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await logoutUserService({ uuid: id });
      return res.status(200).json({ message: response });
    } else {
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCodeChangePasswordUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await codeChangePasswordUserService({ uuid: id });
      return res.status(201).json({ message: response });
    } else {
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function putChangePasswordUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await changePasswordUserService({
        uuid: id,
        data: req.body,
      });
      return res.status(201).json({ message: response });
    } else {
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  getLogoutUserController,
  postCodeChangePasswordUserController,
  postSigninUserController,
  postSignupUserController,
  putChangePasswordUserController,
};
