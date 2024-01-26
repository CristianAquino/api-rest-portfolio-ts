export const insertDataLogin = {
  type: "object",
  properties: {
    email: {
      type: "string",
      description: "User email",
      example: "lorem@ipsum.com",
    },
    password: {
      type: "string",
      description: "User password",
      example: "********",
      length: 32,
    },
  },
};

export const responseDataSuccessLogin = {
  type: "object",
  properties: {
    token: {
      type: "string",
      description: "Bearer token",
      example:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzUwMjUwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYw",
    },
  },
};
