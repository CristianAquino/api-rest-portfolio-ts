import { PermanDataImage } from "./image_swagger.schema";

export const PermanDataProject = {
  title: {
    type: "string",
    description: "Project title",
    example: "Project title",
    length: 64,
  },
  description: {
    type: "string",
    description: "Project description",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    length: 200,
  },
  link: {
    type: "string",
    description: "Project link",
    example: "https://www.xxxxx.com",
  },
};
export const OneDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Project ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...PermanDataProject,
    image: {
      $ref: "#/components/schemas/AllDataImage",
    },
    skills: {
      $ref: "#/components/schemas/AllDataSkill",
    },
  },
};
export const AllDataProjectSwaggerSchema = {
  type: "array",
  items: {
    ...OneDataProjectSwaggerSchema,
  },
};
export const InsertDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    ...PermanDataProject,
    thumbnail: {
      type: "string",
      description: "Image thumbnail",
      example: "https://example.com/thumbnail.jpg",
    },
    skills: {
      type: "array",
      items: {
        type: "string",
        description: "Skill ID",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
    },
  },
};
export const UpdateDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Project ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...PermanDataProject,
  },
};
export const UpdateImageDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Project ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    image: {
      type: "object",
      properties: { ...PermanDataImage },
    },
  },
};
export const UpdateSkillsDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Project ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    skills: {
      type: "array",
      items: {
        type: "string",
        description: "Skill ID",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
    },
  },
};
