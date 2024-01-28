import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import {
  allDataImageSwaggerSchema,
  allDataProjectSwaggerSchema,
  allDataSkillSwaggerSchema,
  allDataUserSwaggerSchema,
  changePasswordUser,
  dataImageSwaggerSchema,
  dataProjectSwaggerSchema,
  dataSkillSwaggerSchema,
  dataUserSwaggerSchema,
  insertDataImageSwaggerSchema,
  insertDataLogin,
  insertDataProjectSwaggerSchema,
  insertDataSkillSwaggerSchema,
  insertDataUserSwaggerSchema,
  messageResponseSwaggerSchema,
  responseDataSuccessLogin,
  updateDataUserSwaggerSchema,
} from "../swagger-schemas";
import {
  allDataSocialSwaggerSchema,
  dataSocialSwaggerSchema,
  insertDataSocialSwaggerSchema,
} from "../swagger-schemas/social_swagger.schema";
import { errorResponseSwaggerSchema } from "../swagger-schemas/error_swagger.schema";
/**
 *definition of doc API
 *
 */
const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation of Portfolio",
    version: "1.0.0",
    description:
      "API developed for the portfolio web project, where there is information about the user, projects carried out and their skills in programming languages, frameworks, clud and tools",
  },
  servers: [{ url: "http://localhost:3000/api/v1" }],
  tags: [
    {
      name: "Auth",
      description: "Created a token",
    },
    {
      name: "User",
      description: "User information",
    },
    {
      name: "Project",
      description: "Project information",
    },
    {
      name: "Skill",
      description: "Skill information",
    },
    {
      name: "Social",
      description: "Social information",
    },
    {
      name: "Image",
      description: "Image information",
    },
  ],
  components: {
    schemas: {
      // auth
      LoginUser: insertDataLogin,
      ResponseLogin: responseDataSuccessLogin,
      ChangePassword: changePasswordUser,
      // user
      AllDataUser: allDataUserSwaggerSchema,
      DataUser: dataUserSwaggerSchema,
      InsertUser: insertDataUserSwaggerSchema,
      UpdateUser: updateDataUserSwaggerSchema,
      // image
      AllDataImage: allDataImageSwaggerSchema,
      DataImage: dataImageSwaggerSchema,
      InsertImage: insertDataImageSwaggerSchema,
      // social
      AllDataSocial: allDataSocialSwaggerSchema,
      DataSocial: dataSocialSwaggerSchema,
      InsertSocial: insertDataSocialSwaggerSchema,
      // project
      AllDataProject: allDataProjectSwaggerSchema,
      DataProject: dataProjectSwaggerSchema,
      InsertProject: insertDataProjectSwaggerSchema,
      // skill
      AllDataSkill: allDataSkillSwaggerSchema,
      DataSkill: dataSkillSwaggerSchema,
      InsertSkill: insertDataSkillSwaggerSchema,
      // message
      MessageResponse: messageResponseSwaggerSchema,
      // error
      ErrorResponse: errorResponseSwaggerSchema,
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
        name: "Authorization",
        description: "Bearer token",
        example: "Bearer token",
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"], // files containing annotations as above
};

export default swaggerJSDoc(swaggerOptions);
