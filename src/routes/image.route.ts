import { Router } from "express";
import { getAllImage } from "../controllers";

const imageRoute = Router();

/**
 *@swagger
 * /image/all-image:
 *  get:
 *   tags:
 *    - Image
 *   summary: get all images
 *   description: get all images
 *   responses:
 *    200:
 *     description: successful operation
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/AllDataImage'
 *    204:
 *     description: No content images
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MessageResponse'
 */
imageRoute.get("/all-image", getAllImage);

export { imageRoute };
