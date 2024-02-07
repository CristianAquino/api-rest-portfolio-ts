import { Router } from "express";
import {
  deleteProjectUserController,
  getAllProjectDataController,
  getMeProjectDataController,
  postCreateProjectUserController,
  putUpdateProjectController,
  putUpdateProjectImageController,
  putUpdateProjectSkillController,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  CreateProjectSchema,
  IdentifierIdSchema,
  UpdateImageProjectSchema,
  UpdateProjectSchema,
  UpdateSkillsProjectSchema,
} from "../schemas";

const projectRoute = Router();

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
 *       $ref: '#/components/schemas/InsertDataProject'
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
projectRoute.post(
  "/create-project",
  [schemaValidator(CreateProjectSchema), verifyToken],
  postCreateProjectUserController
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
 *       $ref: '#/components/schemas/UpdateDataProject'
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
projectRoute.put(
  "/update-project",
  [schemaValidator(UpdateProjectSchema), verifyToken],
  putUpdateProjectController
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
projectRoute.delete(
  "/delete-project/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteProjectUserController
);

/**
 *@swagger
 * /project/all-project-data:
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
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
projectRoute.get("/all-project-data", getAllProjectDataController);

/**
 *@swagger
 * /project/me-project-data:
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
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *   security:
 *    - bearerAuth: []
 */
projectRoute.get("/me-project-data", verifyToken, getMeProjectDataController);

/**
 *@swagger
 * /project/update-project-image:
 *  put:
 *   tags:
 *    - Project
 *   summary: put user
 *   description: put user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateImageDataProject'
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
projectRoute.put(
  "/update-project-image",
  [schemaValidator(UpdateImageProjectSchema), verifyToken],
  putUpdateProjectImageController
);

/**
 *@swagger
 * /project/update-project-skill:
 *  put:
 *   tags:
 *    - Project
 *   summary: put user social
 *   description: put user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateSkillsDataProject'
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
projectRoute.put(
  "/update-project-skill",
  [schemaValidator(UpdateSkillsProjectSchema), verifyToken],
  putUpdateProjectSkillController
);
export { projectRoute };
