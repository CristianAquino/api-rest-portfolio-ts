/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/test/",
    "<rootDir>/node_modules/",
  ],
  setupFiles: ["dotenv/config"], // necesario para incluir el env
};
