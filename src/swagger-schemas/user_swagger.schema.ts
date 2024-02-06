export const PermanDataUser = {
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
      ...PermanDataUser,
      email: {
        type: "string",
        description: "User email",
        example: "lorem@ipsum.com",
      },
      image: {
        $ref: "#/components/schemas/OneDataImage",
      },
      socials: {
        $ref: "#/components/schemas/AllDataSocialUser",
      },
      skills: {
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
    ...PermanDataUser,
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
    ...PermanDataUser,
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
    ...PermanDataUser,
  },
};
