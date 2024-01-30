const permanData = {
  name: {
    type: "string",
    description: "Skill name",
    example: "HTML",
    length: 64,
  },
  icon: {
    type: "string",
    description: "Skill icon",
    example: "https://www.xxxxx.com",
  },
  type: {
    type: "string",
    description: "Skill type",
    example: "language",
  },
};
export const allDataSkillSwaggerSchema = {
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
    },
  },
};
export const dataSkillSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "User ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...permanData,
  },
};
export const insertDataSkillSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...permanData,
    },
  },
};
export const updateDataSkillSwaggerSchema = {
  type: "array",
  items: {
    ...dataSkillSwaggerSchema,
  },
};
