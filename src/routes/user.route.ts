import { Router } from "express";
import { getOneUser, postCreateUser, putUpdateDataUser } from "../controllers";
import { schemaValidator } from "../middlewares";
import { CreateUserSchema, UpdateUserSchema } from "../schemas";

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
 *    400:
 *     description: Bad request
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
 *    202:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorResponse'
 *    400:
 *     description: invalid id user
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *    401:
 *     description: unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *    404:
 *     description: user not found
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *    422:
 *     description: validation exception
 *   security:
 *    - bearerAuth: []
 */
userRoute.put("/", schemaValidator(UpdateUserSchema), putUpdateDataUser);

export { userRoute };
