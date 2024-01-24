const permanData = {
  name: {
    type: "string",
    description: "Social name",
    example: "Facebook",
    length: 128,
  },
  link: {
    type: "string",
    description: "Social link",
    example: "https://facebook.com",
  },
  color: {
    type: "string",
    description: "Social color",
    example: "#ab11c5",
    length: 8,
  },
};
export const allDataSocialSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...permanData,
      id: {
        type: "string",
        description: "User ID",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
    },
  },
};
export const dataSocialSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
  },
};
export const insertDataSocialSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
    user: {
      $ref: "#/components/schemas/DataUser",
    },
  },
};
