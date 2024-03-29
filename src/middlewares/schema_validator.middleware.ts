import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json(
          error.issues.map((issue) => ({
            path: issue.path[1],
            message: issue.message,
          }))
        );
      }
    }
  };
