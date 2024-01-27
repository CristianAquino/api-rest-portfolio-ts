import { Router } from "express";
import { getOneUser, putUpdateDataUser } from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import { UpdateUserSchema } from "../schemas";

const userRoute = Router();

/**
 *@swagger
 * /user:
 *  get:
 *   tags:
 *    - User
 *   summary: get user
 *   description: get user
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
 *        $ref: '#/components/schemas/MessageResponse'
 */
userRoute.get("/", getOneUser);
/**
 *@swagger
 * /user:
 *  put:
 *   tags:
 *    - User
 *   summary: put user
 *   description: put user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateUser'
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    400:
 *     description: invalid id user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    401:
 *     description: unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    404:
 *     description: user not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    422:
 *     description: validation exception
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorResponse'
 *   security:
 *    - bearerAuth: []
 */
userRoute.put(
  "/",
  [schemaValidator(UpdateUserSchema), verifyToken],
  putUpdateDataUser
);

export { userRoute };
