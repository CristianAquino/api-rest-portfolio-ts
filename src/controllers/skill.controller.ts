import { NextFunction, Request, Response } from "express";
import {
  allSkillData,
  createUserSkill,
  deleteDataSkill,
  updateDataSkill,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllSkill(req: Request, res: Response, next: NextFunction) {
  try {
    const rsponse = await allSkillData();
    return res.status(200).json(rsponse);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCreateUserSkill(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await createUserSkill({ uuid: id, data: body });
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

async function putUpdateSkillUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const response = await updateDataSkill({ data: body });
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

async function deleteSkillUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const response = await deleteDataSkill({ id });
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  deleteSkillUser,
  getAllSkill,
  postCreateUserSkill,
  putUpdateSkillUser,
};
