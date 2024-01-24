import { Request, Response } from "express";
import { InsertDataUser, UpdateDataUser, UserInfo } from "../services";

async function getOneUser(req: Request, res: Response) {
  try {
    const response = await UserInfo();
    return res.status(200).json(response);
  } catch (error) {}
}

async function postCreateUser(req: Request, res: Response) {
  try {
    const { body } = req;
    const response = await InsertDataUser(body);
    return res.status(200).json(response);
  } catch (error) {}
}

async function putUpdateDataUser(req: Request, res: Response) {
  try {
    const { body } = req;
    const response = await UpdateDataUser(body);
    return res.status(200).json(response);
  } catch (error) {}
}

export { getOneUser, postCreateUser, putUpdateDataUser };
