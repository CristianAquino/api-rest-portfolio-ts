import { NextFunction, Request, Response } from "express";
import { allDataImageService } from "../services";

async function getAllDataImageController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await allDataImageService();
    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      return next(error);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { getAllDataImageController };
