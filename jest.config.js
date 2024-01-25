/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupFilesAfterEnv.ts"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/test/",
    "<rootDir>/node_modules/",
  ],
};
