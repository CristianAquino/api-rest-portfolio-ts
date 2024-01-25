import { NextFunction, Request, Response } from "express";
import { InsertDataUser, UpdateDataUser, UserInfo } from "../services";
import { CreatedError } from "../utils";

async function getOneUser(req: Request, res: Response) {
  try {
    const response = await UserInfo();
    return res.status(200).json(response);
  } catch (error) {}
}

async function postCreateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await InsertDataUser(req.body);
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function putUpdateDataUser(req: Request, res: Response) {
  try {
    const response = await UpdateDataUser(req.body);
    return res.status(200).json(response);
  } catch (error) {}
}

export { getOneUser, postCreateUser, putUpdateDataUser };
