import { NextFunction, Request, Response } from "express";
import {
  allProjectData,
  createUserProject,
  deleteDataProject,
  updateDataProject,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getAllProject(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await allProjectData();
    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postCreateUserProject(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await createUserProject({ uuid: id, data: body });
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

async function putUpdateProjectUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const response = await updateDataProject({ data: body });
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

async function deleteProjectUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const response = await deleteDataProject({ id });
    return res.status(200).json({ message: response });
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export {
  deleteProjectUser,
  getAllProject,
  postCreateUserProject,
  putUpdateProjectUser,
};
