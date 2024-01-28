import { NextFunction, Request, Response } from "express";
import { UpdateDataUser, UserInfo } from "../services";
import { RequestExtens } from "../types";

async function getOneUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await UserInfo();
    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function putUpdateDataUser(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await UpdateDataUser({ data: body, uuid: id });
      return res.status(200).json({ message: response });
    }
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { getOneUser, putUpdateDataUser };
