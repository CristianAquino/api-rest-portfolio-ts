import { NextFunction, Request, Response } from "express";
import { validationError } from "../utils";

export function handleError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { code } = validationError(error.name);
  return res.status(code).send({ message: error.message });
}
