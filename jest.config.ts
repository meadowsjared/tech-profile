import type { Config } from "jest";

// 9/23/23
// https://github.com/jestjs/jest/issues/14046#issuecomment-1732350642
// Note: jest --watch is broken until this is fixed if you have sl installed due to a conflict with Sapling

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
