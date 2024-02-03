import { Router } from "express";
import {
  getAllUserDataController,
  getMeUserDataController,
  putUpdateDataUserController,
  putUpdateImageUserController,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import { SendDataImageSchema, UpdateDataUserSchema } from "../schemas";

const userRoute = Router();

/**
 *@swagger
 * /user/all-user-data:
 *  get:
 *   tags:
 *    - User
 *   summary: get one user
 *   description: get one user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataUser'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
userRoute.get("/all-user-data", getAllUserDataController);

/**
 *@swagger
 * /user/me-user-data:
 *  get:
 *   tags:
 *    - User
 *   summary: get one user
 *   description: get one user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/OneDataUser'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *   security:
 *    - bearerAuth: []
 */
userRoute.get("/me-user-data", verifyToken, getMeUserDataController);

/**
 *@swagger
 * /user/update-data:
 *  put:
 *   tags:
 *    - User
 *   summary: put data user
 *   description: put data user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateDataUser'
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    400:
 *     description: invalid id user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    401:
 *     description: unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    404:
 *     description: user not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    422:
 *     description: validation exception
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessageInputDataUser'
 *   security:
 *    - bearerAuth: []
 */
userRoute.put(
  "/update-data",
  [schemaValidator(UpdateDataUserSchema), verifyToken],
  putUpdateDataUserController
);

/**
 *@swagger
 * /user/update-image:
 *  put:
 *   tags:
 *    - User
 *   summary: put user
 *   description: put user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SendDataImage'
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    400:
 *     description: invalid id user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    401:
 *     description: unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    404:
 *     description: user not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    422:
 *     description: validation exception
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorMessageInputDataUser'
 *   security:
 *    - bearerAuth: []
 */
userRoute.put(
  "/update-image",
  [schemaValidator(SendDataImageSchema), verifyToken],
  putUpdateImageUserController
);
export { userRoute };
