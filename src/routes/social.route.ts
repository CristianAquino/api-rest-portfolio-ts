import { Router } from "express";
import {
  deleteSocialUser,
  getAllSocial,
  postCreateUserSocial,
  putUpdateSocialUser,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import { CreateSocialSchema, IdentifierIdSchema } from "../schemas";

const socialRoute = Router();

/**
 *@swagger
 * /social/all-social:
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
 *        $ref: '#/components/schemas/AllDataSocial'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 */
socialRoute.get("/all-social", getAllSocial);

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
 *       $ref: '#/components/schemas/InsertSocial'
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
 *   security:
 *    - bearerAuth: []
 */
socialRoute.post(
  "/create-social",
  [schemaValidator(CreateSocialSchema), verifyToken],
  postCreateUserSocial
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
 *       $ref: '#/components/schemas/UpdateSocial'
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
socialRoute.put(
  "/update-social",
  [schemaValidator(CreateSocialSchema), verifyToken],
  putUpdateSocialUser
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
socialRoute.delete(
  "/delete-social/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteSocialUser
);

export { socialRoute };
