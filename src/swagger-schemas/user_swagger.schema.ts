const permanData = {
  name: {
    type: "string",
    description: "User name",
    example: "Lorem",
    length: 64,
  },
  first_name: {
    type: "string",
    description: "User first name",
    example: "Impsum",
    length: 64,
  },
  second_name: {
    type: "string",
    description: "User second name",
    example: "Dolor",
    length: 64,
  },
  description: {
    type: "string",
    description: "User description",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    length: 200,
  },
  cv_link: {
    type: "string",
    description: "User cv link",
    example: null,
  },
};
// posible no se utilice
// debido a que solo sera un
// unico usuario
export const AllDataUserSwaggerSchema = {
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
      email: {
        type: "string",
        description: "User email",
        example: "lorem@ipsum.com",
      },
      uuid: {
        type: "string",
        description: "User uuid",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
      code: {
        type: "string",
        description: "Code change password",
        example: "1234",
      },
      image: {
        $ref: "#/components/schemas/OneDataImage",
      },
      social: {
        $ref: "#/components/schemas/AllDataSocialUser",
      },
      skill: {
        $ref: "#/components/schemas/AllDataSkill",
      },
    },
  },
};
export const OneDataUserSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...permanData,
    email: {
      type: "string",
      description: "User email",
      example: "lorem@ipsum.com",
    },
    image: {
      $ref: "#/components/schemas/OneDataImage",
    },
  },
};
export const SignupDataUserSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
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
export const UpdateDataUserSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
  },
};
