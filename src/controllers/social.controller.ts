import { NextFunction, Request, Response } from "express";
import {
  allSocialDataUserService,
  createSocialUserService,
  deleteSocialUserService,
  meSocialDataUserService,
  updateSocialUserService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllSocialDataUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await allSocialDataUserService();
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function getMeSocialDataUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.id)
      throw new UnauthorizedError(
        "You do not have permissions to perform this action"
      );
    const response = await meSocialDataUserService({ uuid: req.id });
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function postCreateSocialUserController(
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
    const response = await createSocialUserService({ uuid: id, data: body });
    return res.status(201).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function putUpdateSocialUserController(
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
    const response = await updateSocialUserService({ data: body, uuid: id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

async function deleteSocialUserController(
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
    const response = await deleteSocialUserService({ id, uuid: req.id });
    return res.status(200).json({ message: response });
  } catch (error) {
    return next(error);
  }
}

export {
  deleteSocialUserController,
  getAllSocialDataUserController,
  getMeSocialDataUserController,
  postCreateSocialUserController,
  putUpdateSocialUserController,
};
