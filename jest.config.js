module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/components/**/*.jsx',
    '<rootDir>/components/**/*.js',
    '<rootDir>/pages/**/*.jsx',
    '<rootDir>/pages/**/*.js',
    '<rootDir>/hooks/**/*.jsx',
    '<rootDir>/hooks/**/*.js',
    '<rootDir>/store/**/*.jsx',
    '<rootDir>/store/**/*.js',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
