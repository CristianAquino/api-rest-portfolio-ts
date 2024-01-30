import { Router } from "express";
import {
  deleteSkillUser,
  getAllSkill,
  postCreateUserSkill,
  putUpdateSkillUser,
} from "../controllers";
import {
  CreateSkillSchema,
  IdentifierIdSchema,
  UpdateSkillSchema,
} from "../schemas";
import { schemaValidator, verifyToken } from "../middlewares";

const skillRoute = Router();

/**
@swagger
 * /skill/all-skill:
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
 *        $ref: '#/components/schemas/MessageResponse'
 */
skillRoute.get("/all-skill", getAllSkill);

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
 *       $ref: '#/components/schemas/InsertSkill'
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
skillRoute.post(
  "/create-skill",
  [schemaValidator(CreateSkillSchema), verifyToken],
  postCreateUserSkill
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
 *       $ref: '#/components/schemas/UpdateSkill'
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
skillRoute.put(
  "/update-skill",
  [schemaValidator(UpdateSkillSchema), verifyToken],
  putUpdateSkillUser
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
skillRoute.delete(
  "/delete-skill/:id",
  [schemaValidator(IdentifierIdSchema), verifyToken],
  deleteSkillUser
);

export { skillRoute };
