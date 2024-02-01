import { NextFunction, Request, Response } from "express";
import {
  UpdateImageUserService,
  oneUserService,
  updateDataUserService,
} from "../services";
import { RequestExtens } from "../types";
import { UnauthorizedError } from "../utils";

async function getOneUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await oneUserService();
    return res.status(200).json(response);
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
// pensar si la imagen colocar a parte
// como en projects
// async function postUploadImageUser(
//   req: RequestExtens<string>,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { body, id } = req;
//     if (id) {
//       const response = await UploadImageUser({ data: body, uuid: id });
//       return res.status(200).json({ message: response });
//     } else {
//       throw new UnauthorizedError(
//         "You do not have permissions to perform this action"
//       );
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       return next(error);
//     }
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }

async function putUpdateImageUserController(
  req: RequestExtens<string>,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, id } = req;
    if (id) {
      const response = await UpdateImageUserService({ data: body, uuid: id });
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
  getOneUserController,
  // postUploadImageUser,
  putUpdateDataUserController,
  putUpdateImageUserController,
};
