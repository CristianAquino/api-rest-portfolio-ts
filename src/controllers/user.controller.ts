import { NextFunction, Request, Response } from "express";
import { UpdateDataUser, UserInfo } from "../services";

async function getOneUser(req: Request, res: Response, next: NextFunction) {
  try {
    // console.log(req.headers["authorization"]);
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
    const response = await UpdateDataUser(req.body);
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { getOneUser, putUpdateDataUser };
