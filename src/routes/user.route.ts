import { Router } from "express";
import { getOneUser, postCreateUser, putUpdateDataUser } from "../controllers";
import { schemaValidator } from "../middlewares";
import { CreateUserSchema } from "../schemas";

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
 *  post:
 *   tags:
 *    - User
 *   summary: post user
 *   description: post user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/InsertUser'
 *   responses:
 *    201:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    400:
 *     description: invalid input
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorResponse'
 *    402:
 *     description: user already exists
 *    422:
 *     description: validation exception
 */
userRoute.post("/", schemaValidator(CreateUserSchema), postCreateUser);
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
 *        type: object
 *    400:
 *     description: invalid id user
 *    404:
 *     description: user not found
 *    422:
 *     description: validation exception
 */
userRoute.put("/", putUpdateDataUser);

export { userRoute };
