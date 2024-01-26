import { NextFunction, Request, Response, request } from "express";
import { InvalidTokenError, confirmToken } from "../utils";
import { JsonWebTokenError } from "jsonwebtoken";

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1] ?? " ";
    const decode: any = confirmToken(token);
    if (!decode) throw new InvalidTokenError("The token entered is not valid");
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return next(error);
    }
  }
  next();
}

export { verifyToken };
