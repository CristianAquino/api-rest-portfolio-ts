import { NextFunction, Request, Response } from "express";
import { loginUser, insertDataUser } from "../services";

async function postLoginUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await loginUser(req.body);
    return res.status(200).json({ token: response });
  } catch (error) {
    if (error instanceof Error) {
      return next();
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCreateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await insertDataUser(req.body);
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
export { postLoginUser, postCreateUser };
