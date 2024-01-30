import { NextFunction, Request, Response } from "express";
import {
  allSocialData,
  createUserSocial,
  deleteDataSocial,
  updateDataSocial,
} from "../services";
import { RequestExtens } from "../types";
import { NotFoundError, UnauthorizedError } from "../utils";

async function getAllSocial(req: Request, res: Response, next: NextFunction) {
  try {
    const rsponse = await allSocialData();
    return res.status(200).json(rsponse);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCreateUserSocial(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await createUserSocial({ uuid: id, data: body });
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

async function putUpdateSocialUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const response = await updateDataSocial({ data: body });
    if (typeof response === "object")
      return res.status(400).json({ dontsave: response });
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteSocialUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const response = await deleteDataSocial({ id });
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  getAllSocial,
  postCreateUserSocial,
  putUpdateSocialUser,
  deleteSocialUser,
};
