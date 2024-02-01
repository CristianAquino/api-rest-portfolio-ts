import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import {
  AllDataUserSwaggerSchema,
  ChangePasswordUserSwaggerSchema,
  DataUserSwaggerSchema,
  MessageResponseActionUserSwaggerSchema,
  SigninUserSwaggerSchema,
  SignupDataUserSwaggerSchema,
  TokenSigninUserSwaggerSchema,
  UpdateDataUserSwaggerSchema,
  allDataImageSwaggerSchema,
  allDataProjectSwaggerSchema,
  allDataSkillSwaggerSchema,
  allDataSocialSwaggerSchema,
  dataImageSwaggerSchema,
  dataProjectSwaggerSchema,
  dataSkillSwaggerSchema,
  dataSocialSwaggerSchema,
  insertDataImageSwaggerSchema,
  insertDataProjectSwaggerSchema,
  insertDataSkillSwaggerSchema,
  insertDataSocialSwaggerSchema,
  updateDataProjectSwaggerSchema,
  updateDataSkillSwaggerSchema,
  updateDataSocialSwaggerSchema,
} from "../swagger-schemas";
import { ErrorMessageInputDataUserSwaggerSchema } from "../swagger-schemas/error_swagger.schema";
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
      SigninUser: SigninUserSwaggerSchema,
      TokenSigninUser: TokenSigninUserSwaggerSchema,
      ChangePasswordUser: ChangePasswordUserSwaggerSchema,
      // user
      AllDataUser: AllDataUserSwaggerSchema,
      DataUser: DataUserSwaggerSchema,
      SignupDataUser: SignupDataUserSwaggerSchema,
      UpdateDataUser: UpdateDataUserSwaggerSchema,
      // image
      AllDataImage: allDataImageSwaggerSchema,
      DataImage: dataImageSwaggerSchema,
      InsertImage: insertDataImageSwaggerSchema,
      // social
      AllDataSocial: allDataSocialSwaggerSchema,
      DataSocial: dataSocialSwaggerSchema,
      InsertSocial: insertDataSocialSwaggerSchema,
      UpdateSocial: updateDataSocialSwaggerSchema,
      // project
      AllDataProject: allDataProjectSwaggerSchema,
      DataProject: dataProjectSwaggerSchema,
      InsertProject: insertDataProjectSwaggerSchema,
      UpdateProject: updateDataProjectSwaggerSchema,
      // skill
      AllDataSkill: allDataSkillSwaggerSchema,
      DataSkill: dataSkillSwaggerSchema,
      InsertSkill: insertDataSkillSwaggerSchema,
      UpdateSkill: updateDataSkillSwaggerSchema,
      // message
      MessageResponseActionUser: MessageResponseActionUserSwaggerSchema,
      // error
      ErrorMessageInputDataUser: ErrorMessageInputDataUserSwaggerSchema,
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
