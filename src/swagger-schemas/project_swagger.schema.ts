export const allDataProjectSwaggerSchema = {
  type: "array",
  items: {
    type: "object",

    properties: {
      id: {
        type: "string",
        description: "User ID",
        example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
      },
      title: {
        type: "string",
        description: "Project title",
        example: "Project title",
        length: 64,
      },
      description: {
        type: "string",
        description: "Project description",
        example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        length: 200,
      },
      link: {
        type: "string",
        description: "Project link",
        example: "https://www.xxxxx.com",
      },
      image: {
        $ref: "#/components/schemas/DataImage",
      },
      skill: {
        $ref: "#/components/schemas/AllDataSkill",
      },
    },
  },
};
export const dataProjectSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    title: {
      type: "string",
      description: "Project title",
      example: "Project title",
      length: 64,
    },
    description: {
      type: "string",
      description: "Project description",
      example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      length: 200,
    },
    link: {
      type: "string",
      description: "Project link",
      example: "https://www.xxxxx.com",
    },
    image: {
      $ref: "#/components/schemas/AllDataImage",
    },
    skill: {
      $ref: "#/components/schemas/AllDataSkill",
    },
  },
};
export const insertDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Project title",
      example: "Project title",
      length: 64,
    },
    description: {
      type: "string",
      description: "Project description",
      example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      length: 200,
    },
    link: {
      type: "string",
      description: "Project link",
      example: "https://www.xxxxx.com",
    },
    user: {
      $ref: "#/components/schemas/DataUser",
    },
    image: {
      $ref: "#/components/schemas/DataImage",
    },
  },
};
