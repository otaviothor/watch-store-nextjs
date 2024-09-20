module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  collectCoverageFrom: [
    "<rootDir>/components/**/*.(js|jsx|ts|tsx)",
    "<rootDir>/pages/**/*.(js|jsx|ts|tsx)",
  ],
};
