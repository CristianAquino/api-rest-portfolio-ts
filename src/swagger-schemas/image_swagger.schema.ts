export const PermanDataImage = {
  id: {
    type: "string",
    description: "Image ID",
    example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
  },
  thumbnail: {
    type: "string",
    description: "Image thumbnail",
    example: "https://example.com/thumbnail.jpg",
  },
};
export const OneDataImageSwaggerSchema = {
  type: "object",
  properties: {
    ...PermanDataImage,
    small: {
      type: "string",
      description: "Image small",
      example: "https://example.com/small.jpg",
    },
  },
};
export const AllDataImageSwaggerSchema = {
  type: "array",
  items: {
    ...OneDataImageSwaggerSchema,
  },
};
export const SendDataImageSwaggerSchema = {
  type: "object",
  properties: {
    ...PermanDataImage,
  },
};
