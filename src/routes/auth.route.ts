import { Router } from "express";
import {
  getLogoutUserController,
  postCodeChangePasswordUserController,
  postSigninUserController,
  postSignupUserController,
  putChangePasswordUserController,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  ChangePasswordUserSchema,
  HeaderAuthorizationUserSchema,
  SigninUserSchema,
  SignupUserSchema,
} from "../schemas";

const authRoute = Router();

/**
 *@swagger
 * /auth/signin:
 *  post:
 *   tags:
 *    - Auth
 *   summary: post for signin user
 *   description: insert data for signin user and have token of access
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SigninUser'
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TokenSigninUser'
 *    404:
 *     description: email or password incorrect
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
 *    500:
 *     description: error to created token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
authRoute.post(
  "/signin",
  schemaValidator(SigninUserSchema),
  postSigninUserController
);

/**
 *@swagger
 * /auth/signup:
 *  post:
 *   tags:
 *    - Auth
 *   summary: post for create user
 *   description: insert data for signup user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SignupDataUser'
 *   responses:
 *    201:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    402:
 *     description: user already exists
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
 *    500:
 *     description: error to created new user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
authRoute.post(
  "/signup",
  schemaValidator(SignupUserSchema),
  postSignupUserController
);

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
authRoute.get(
  "/logout",
  [schemaValidator(HeaderAuthorizationUserSchema), verifyToken],
  getLogoutUserController
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
 *       $ref: '#/components/schemas/ChangePasswordUser'
 *   responses:
 *    201:
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
 authRoute.put(
  "/change-password",
  [schemaValidator(ChangePasswordUserSchema), verifyToken],
  putChangePasswordUserController
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
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *    403:
 *     description: resend error to send email
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
authRoute.post(
  "/code-change-password",
  [schemaValidator(HeaderAuthorizationUserSchema), verifyToken],
  postCodeChangePasswordUserController
);

export { authRoute };
