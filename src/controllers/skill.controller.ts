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
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getMeSkillDataController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.id) {
      const response = await meSkillDataService({ uuid: req.id });
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

async function postCreateSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await createSkillService({ uuid: id, data: body });
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

async function putUpdateSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await updateSkillService({ data: body, uuid: id });
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

async function deleteSkillController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.id) {
      const { id } = req.params;
      const response = await deleteSkillService({ id, uuid: req.id });
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
  deleteSkillController,
  getAllSkillDataController,
  getMeSkillDataController,
  postCreateSkillController,
  putUpdateSkillController,
};
