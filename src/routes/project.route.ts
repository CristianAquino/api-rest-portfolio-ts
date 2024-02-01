import { Router } from "express";
import {
  deleteProjectUser,
  getAllProject,
  postCreateUserProject,
  putUpdateProjectUser,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  CreateProjectSchema,
  IdentifierIdSchema,
  UpdateProjectSchema,
} from "../schemas";

const projectRoute = Router();

/**
 *@swagger
 * /project/all-project:
 *  get:
 *   tags:
 *    - Project
 *   summary: project user
 *   description: social user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataProject'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 */
projectRoute.get("/all-project", getAllProject);

/**
 *@swagger
 * /project/create-project:
 *  post:
 *   tags:
 *    - Project
 *   summary: post user social
 *   description: post user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/InsertProject'
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
projectRoute.post(
  "/create-project",
  [schemaValidator(CreateProjectSchema), verifyToken],
  postCreateUserProject
);

/**
 *@swagger
 * /project/update-project:
 *  put:
 *   tags:
 *    - Project
 *   summary: put user social
 *   description: put user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateProject'
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
projectRoute.put(
  "/update-project",
  [schemaValidator(UpdateProjectSchema), verifyToken],
  putUpdateProjectUser
);

/**
 *@swagger
 * /project/delete-project/{id}:
 *  delete:
 *   tags:
 *    - Project
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
projectRoute.delete(
  "/delete-project/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteProjectUser
);

export { projectRoute };
