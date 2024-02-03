import { Router } from "express";
import {
  deleteSkillController,
  getAllSkillDataController,
  getMeSkillDataController,
  postCreateSkillController,
  putUpdateSkillController,
} from "../controllers";
import { schemaValidator, verifyToken } from "../middlewares";
import {
  CreateSkillSchema,
  IdentifierIdSchema,
  UpdateSkillSchema,
} from "../schemas";

const skillRoute = Router();

/**
@swagger
 * /skill/all-skill-data:
 *  get:
 *   tags:
 *    - Skill
 *   summary: skill user
 *   description: skill user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataSkill'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 */
skillRoute.get("/all-skill-data", getAllSkillDataController);

/**
@swagger
 * /skill/me-skill-data:
 *  get:
 *   tags:
 *    - Skill
 *   summary: skill user
 *   description: skill user
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataSkill'
 *    204:
 *     description: No content
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponseActionUser'
 *   security:
 *    - bearerAuth: []
 */
skillRoute.get("/me-skill-data", verifyToken, getMeSkillDataController);

/**
@swagger
 * /skill/create-skill:
 *  post:
 *   tags:
 *    - Skill
 *   summary: post user social
 *   description: post user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/InsertDataSkill'
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
skillRoute.post(
  "/create-skill",
  [schemaValidator(CreateSkillSchema), verifyToken],
  postCreateSkillController
);

/**
 *@swagger
 * /skill/update-skill:
 *  put:
 *   tags:
 *    - Skill
 *   summary: put user social
 *   description: put user social
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateDataSkill'
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
skillRoute.put(
  "/update-skill",
  [schemaValidator(UpdateSkillSchema), verifyToken],
  putUpdateSkillController
);

/**
 *@swagger
 * /skill/delete-skill/{id}:
 *  delete:
 *   tags:
 *    - Skill
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
skillRoute.delete(
  "/delete-skill/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteSkillController
);

export { skillRoute };
