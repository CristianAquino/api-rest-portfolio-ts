import { NextFunction, Request, Response } from "express";
import {
  allProjectDataService,
  createProjectUserSerice,
  deleteProjectUserService,
  meProjectDataService,
  updateProjectImageService,
  updateProjectService,
  updateProjectSkillService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllProjectDataController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await allProjectDataService();
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function getMeProjectDataController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await meProjectDataService({ uuid: req.id });
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function postCreateProjectUserController(
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
    const response = await createProjectUserSerice({ uuid: id, data: body });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putUpdateProjectController(
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
    const response = await updateProjectService({ data: body, uuid: id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function deleteProjectUserController(
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
    const response = await deleteProjectUserService({ id, uuid: req.id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putUpdateProjectImageController(
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
    const response = await updateProjectImageService({
      data: body,
      uuid: id,
    });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putUpdateProjectSkillController(
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
    const response = await updateProjectSkillService({
      data: body,
      uuid: id,
    });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}
export {
  deleteProjectUserController,
  getAllProjectDataController,
  getMeProjectDataController,
  postCreateProjectUserController,
  putUpdateProjectController,
  putUpdateProjectImageController,
  putUpdateProjectSkillController,
};
