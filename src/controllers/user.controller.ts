import { NextFunction, Request, Response } from "express";
import {
  allUserDataService,
  meUserDataService,
  updateDataUserService,
  updateImageUserService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllUserDataController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await allUserDataService();
    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getMeUserDataController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.id) {
      const response = await meUserDataService({ uuid: req.id });
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

async function putUpdateDataUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await updateDataUserService({ data: body, uuid: id });
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

async function putUpdateImageUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await updateImageUserService({ data: body, uuid: id });
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
  getAllUserDataController,
  getMeUserDataController,
  putUpdateDataUserController,
  putUpdateImageUserController,
};
