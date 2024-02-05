import { NextFunction, Request, Response } from "express";
import {
  allSkillDataService,
  createSkillService,
  deleteSkillService,
  meSkillDataService,
  updateSkillService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllSkillDataController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await allSkillDataService();
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function getMeSkillDataController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await meSkillDataService({ uuid: req.id });
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function postCreateSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (!id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await createSkillService({ uuid: id, data: body });
    if (typeof response === "object")
      return res.status(400).json({ dontsave: response });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putUpdateSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (!id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await updateSkillService({ data: body, uuid: id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function deleteSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const { id } = req.params;
    const response = await deleteSkillService({ id, uuid: req.id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

export {
  deleteSkillController,
  getAllSkillDataController,
  getMeSkillDataController,
  postCreateSkillController,
  putUpdateSkillController,
};
