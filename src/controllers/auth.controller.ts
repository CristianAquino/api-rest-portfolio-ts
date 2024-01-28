import { NextFunction, Request, Response } from "express";
import {
  loginUser,
  insertDataUser,
  removeLoginUser,
  generateCodeChangePassword,
  changePassword,
} from "../services";
import { RequestExtens } from "../types";

async function postLoginUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await loginUser({ data: req.body });
    return res.status(200).json({ token: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCreateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await insertDataUser({ data: req.body });
    return res.status(201).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getLogoutUser(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await removeLoginUser({ uuid: id });
      return res.status(200).json({ message: response });
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCodeChangePassword(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await generateCodeChangePassword({ uuid: id });
      return res.status(201).json({ message: response });
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function putChangePassword(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req;
    if (id) {
      const response = await changePassword({ uuid: id, data: req.body });
      return res.status(201).json({ message: response });
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  postLoginUser,
  postCreateUser,
  getLogoutUser,
  postCodeChangePassword,
  putChangePassword,
};
