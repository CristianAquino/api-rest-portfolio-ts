import { NextFunction, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { RequestExtens } from "../types";
import { InvalidTokenError, confirmToken } from "../utils";

async function verifyToken(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1] ?? " ";
    const decode: any = confirmToken(token);
    if (!decode) throw new InvalidTokenError("The token entered is not valid");
    req.id = decode.id;
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return next(error);
    }
  }
  next();
}

export { verifyToken };
