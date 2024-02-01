const permanData = {
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
export const allDataProjectSwaggerSchema = {
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
    ...permanData,
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
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
  type: "array",
  items: {
    type: "object",
    properties: {
      ...permanData,
      skills: {
        type: "array",
        items: {
          type: "string",
          description: "Skill ID",
          example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
        },
      },
    },
  },
};
export const updateDataProjectSwaggerSchema = {
  type: "object",
  properties: {
    ...permanData,
  },
};
