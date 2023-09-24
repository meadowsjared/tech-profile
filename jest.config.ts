import type { Config } from "jest";

const config = async (): Promise<Config> => {
  return {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    },
    // verbose: true, // Uncomment to display every test
  };
};

export default config;
