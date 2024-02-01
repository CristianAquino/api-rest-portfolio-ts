export const ErrorMessageInputDataUserSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      path: {
        type: "array",
        items: {
          type: "string",
        },
      },
      message: {
        type: "string",
        example: "Error message",
      },
    },
  },
};
