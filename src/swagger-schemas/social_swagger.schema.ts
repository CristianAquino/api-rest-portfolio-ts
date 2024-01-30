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
      id: {
        type: "string",
        description: "User ID",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
      ...permanData,
    },
  },
};
export const dataSocialSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...permanData,
  },
};
export const insertDataSocialSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...permanData,
    },
  },
};
export const updateDataSocialSwaggerSchema = {
  type: "array",
  items: {
    ...dataSocialSwaggerSchema,
  },
};
