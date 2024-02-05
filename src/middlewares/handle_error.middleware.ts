import { NextFunction, Request, Response } from "express";
import { validationError } from "../utils";

export function handleError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof Error) {
    const { code } = validationError(error.name);
    return res.status(code).send({ message: error.message });
  }
  return res.status(500).json({ message: "Internal Server Error" });
}
