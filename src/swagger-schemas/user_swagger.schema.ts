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
    length: 128,
  },
  second_name: {
    type: "string",
    description: "User second name",
    example: "Dolor",
    length: 128,
  },
  description: {
    type: "string",
    description: "User description",
    example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    length: 200,
  },
  email: {
    type: "string",
    description: "User email",
    example: "lorem@ipsum.com",
  },
  cv_link: {
    type: "string",
    description: "User cv link",
    example: "https://www.xxxxx.com",
  },
};

export const allDataUserSwaggerSchema = {
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
        $ref: "#/components/schemas/DataImage",
      },
      social: {
        $ref: "#/components/schemas/AllDataSocial",
      },
      project: {
        $ref: "#/components/schemas/AllDataProject",
      },
      skill: {
        $ref: "#/components/schemas/AllDataSkill",
      },
    },
  },
};
export const dataUserSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
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
      $ref: "#/components/schemas/DataImage",
    },
    social: {
      $ref: "#/components/schemas/AllDataSocial",
    },
    project: {
      $ref: "#/components/schemas/AllDataProject",
    },
    skill: {
      $ref: "#/components/schemas/AllDataSkill",
    },
  },
};
export const insertDataUserSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
    password: {
      type: "string",
      description: "User password",
      example: "********",
      length: 32,
    },
  },
};
export const updateDataUserSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
  },
};
