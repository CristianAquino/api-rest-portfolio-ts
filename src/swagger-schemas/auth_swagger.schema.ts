export const SigninUserSwaggerSchema = {
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

export const TokenSigninUserSwaggerSchema = {
  type: "object",
  properties: {
    token: {
      type: "string",
      description: "Bearer token",
      example:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xMzUwMjUwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYwMjYw",
    },
  },
};

export const ChangePasswordUserSwaggerSchema = {
  type: "object",
  properties: {
    code: {
      type: "string",
      description: "Code of validation",
      example: "1234",
      length: 4,
    },
    oldpassword: {
      type: "string",
      description: "Old password to change",
      example: "********",
      length: 32,
    },
    newpassword: {
      type: "string",
      description: "New password to register",
      example: "********",
      length: 32,
    },
  },
};
