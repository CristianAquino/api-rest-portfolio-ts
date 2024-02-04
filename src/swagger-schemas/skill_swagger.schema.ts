export const PermanDataSkill = {
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
export const OneDataSkillSwaggerSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Skill ID",
      example: "2e63341a-e627-48ac-bb1a-9d56e2e9cc4f",
    },
    ...PermanDataSkill,
  },
};
export const AllDataSkillSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...OneDataSkillSwaggerSchema,
    },
  },
};
export const InsertDataSkillSwaggerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      ...PermanDataSkill,
    },
  },
};
// export const UpdateDataSkillSwaggerSchema = {
//   type: "array",
//   items: {
//     ...OneDataSkillSwaggerSchema,
//   },
// };
