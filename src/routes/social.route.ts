import { Router } from "express";
import {
  deleteSocialUserController,
  getAllSocialDataUserController,
  getMeSocialDataUserController,
  postCreateSocialUserController,
  putUpdateSocialUserController,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  CreateDataSocialSchema,
  IdentifierIdSchema,
  UpdateDataSocialSchema,
} from "../schemas";

const socialRoute = Router();

/**
 *@swagger
 * /social/all-social-data:
 *  get:
 *   tags:
 *    - Social
 *   summary: social user
 *   description: social user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataSocialUser'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
socialRoute.get("/all-social-data", getAllSocialDataUserController);

/**
 *@swagger
 * /social/me-social-data:
 *  get:
 *   tags:
 *    - Social
 *   summary: social user
 *   description: social user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataSocialUser'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *   security:
 *    - bearerAuth: []
 */
socialRoute.get("/me-social-data", verifyToken, getMeSocialDataUserController);

/**
 *@swagger
 * /social/create-social:
 *  post:
 *   tags:
 *    - Social
 *   summary: post user social
 *   description: post user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/InsertDataSocialUser'
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
 *   security:
 *    - bearerAuth: []
 */
socialRoute.post(
  "/create-social",
  [schemaValidator(CreateDataSocialSchema), verifyToken],
  postCreateSocialUserController
);

/**
 *@swagger
 * /social/update-social:
 *  put:
 *   tags:
 *    - Social
 *   summary: put user social
 *   description: put user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateDataSocialUser'
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
socialRoute.put(
  "/update-social",
  [schemaValidator(UpdateDataSocialSchema), verifyToken],
  putUpdateSocialUserController
);

/**
 *@swagger
 * /social/delete-social/{id}:
 *  delete:
 *   tags:
 *    - Social
 *   summary: delete user social
 *   description: delete user social
 *   parameters:
 *    - name: id
 *      in: path
 *      description: social id to delete
 *      required: true
 *      schema:
 *       type: string
 *       format: uuid
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
socialRoute.delete(
  "/delete-social/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteSocialUserController
);

export { socialRoute };
