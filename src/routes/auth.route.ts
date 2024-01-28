import { Router } from "express";
import {
  getLogoutUser,
  postCodeChangePassword,
  postCreateUser,
  postLoginUser,
  putChangePassword,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  ChangeUserPasswordSchema,
  CreateUserSchema,
  HeaderValidateSchema,
  UserLoginSchema,
} from "../schemas";

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
 *    404:
 *     description: email or password incorrect
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
 *    500:
 *     description: error to created token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
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
 *    402:
 *     description: user already exists
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
 *    500:
 *     description: error to created new user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 */
authRoute.post("/signup", schemaValidator(CreateUserSchema), postCreateUser);

/**
 *@swagger
 * /auth/logout:
 *  get:
 *   tags:
 *    - Auth
 *   summary: logout user
 *   description: logout user
 *   responses:
 *    200:
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
authRoute.get(
  "/logout",
  [schemaValidator(HeaderValidateSchema), verifyToken],
  getLogoutUser
);

/**
 *@swagger
 * /auth/code-change-password:
 *  post:
 *   tags:
 *    - Auth
 *   summary: generate code for change password user
 *   description: generate code for change password user
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *    403:
 *     description: resend error to send email
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
authRoute.post(
  "/code-change-password",
  [schemaValidator(HeaderValidateSchema), verifyToken],
  postCodeChangePassword
);

/**
 *@swagger
 * /auth/change-password:
 *  put:
 *   tags:
 *    - Auth
 *   summary: change password user
 *   description: change password user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/ChangePassword'
 *   responses:
 *    201:
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
authRoute.put(
  "/change-password",
  [schemaValidator(ChangeUserPasswordSchema), verifyToken],
  putChangePassword
);

export { authRoute };
