const permanData = {
  thumbnail: {
    type: "string",
    description: "Image thumbnail",
    example: "https://example.com/thumbnail.jpg",
  },
  small: {
    type: "string",
    description: "Image small",
    example: "https://example.com/small.jpg",
  },
};
export const allDataImageSwaggerSchema = {
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
export const dataImageSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
  },
};
export const insertDataImageSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
    user: {
      $ref: "#/components/schemas/DataUser",
    },
  },
};
