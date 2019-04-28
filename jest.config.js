// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  roots: ['src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: [
    'src/**',
    '!src/index.js',
    '!**/*.test.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.spec.{js,jsx}',
  ],
  testResultsProcessor: './node_modules/jest-html-reporter',
  // Unit test coverage threshhold
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  //  Allow to transpile js and jsx file using babel
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.(js|jsx)?(x)', '**/?(*.)+(spec|test).(js|jsx)?(x)'],
  // An array of file extensions which modules are using
  moduleFileExtensions: ['js', 'jsx'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],
};
