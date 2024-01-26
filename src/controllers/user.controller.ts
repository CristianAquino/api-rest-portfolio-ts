import { NextFunction, Request, Response } from "express";
import { UpdateDataUser, UserInfo } from "../services";

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
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1] ?? " ";
    const response = await UpdateDataUser({ data: req.body, token });
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { getOneUser, putUpdateDataUser };
