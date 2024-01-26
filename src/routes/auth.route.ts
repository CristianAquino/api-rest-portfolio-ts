import { Router } from "express";
import { postCreateUser, postLoginUser } from "../controllers";
import { schemaValidator } from "../middlewares";
import { CreateUserSchema, UserLoginSchema } from "../schemas";

const authRoute = Router();

/**
 *@swagger
 * /auth/signin:
 *  post:
 *   tags:
 *    - Auth
 *   summary: created a token
 *   description: token for login
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/LoginUser'
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ResponseLogin'
 *    400:
 *     description: invalid input
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ErrorResponse'
 *    404:
 *     description: email or password incorrect
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 */
authRoute.post("/signin", schemaValidator(UserLoginSchema), postLoginUser);
/**
 *@swagger
 * /auth/signup:
 *  post:
 *   tags:
 *    - Auth
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
authRoute.post("/signup", schemaValidator(CreateUserSchema), postCreateUser);
authRoute.post("/logout", (req, res) => {});
export { authRoute };
