const permanData = {
  name: {
    type: "string",
    description: "Social name",
    example: "Facebook",
    length: 64,
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
export const AllDataSocialUserSwaggerSchema = {
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
export const OneDataSocialUserSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Social ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...permanData,
  },
};
export const InsertDataSocialUserSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...permanData,
    },
  },
};
export const UpdateDataSocialUserSwaggerSchema = {
  type: "array",
  items: {
    ...OneDataSocialUserSwaggerSchema,
  },
};
