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
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getMeSocialDataUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.id) {
      const response = await meSocialDataUserService({ uuid: req.id });
      return res.status(200).json(response);
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

async function postCreateSocialUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await createSocialUserService({ uuid: id, data: body });
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

async function putUpdateSocialUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await updateSocialUserService({ data: body, uuid: id });
      if (typeof response === "object")
        return res.status(400).json({ dontsave: response });
      return res.status(200).json({ message: response });
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

async function deleteSocialUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.id) {
      const { id } = req.params;
      const response = await deleteSocialUserService({ id, uuid: req.id });
      return res.status(200).json({ message: response });
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

export {
  deleteSocialUserController,
  getAllSocialDataUserController,
  getMeSocialDataUserController,
  postCreateSocialUserController,
  putUpdateSocialUserController,
};
