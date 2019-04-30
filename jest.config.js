// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  roots: ['src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  collectCoverageFrom: [
    'src/**',
    '!src/app.jsx',
    '!src/utils/**',
    '!src/constants/**',
    '!src/store/**',
    '!src/actions/**',
    '!src/reducers/**',
    '!**/index.{js,jsx}',
    '!**/node_modules/**',
    '!**/*.spec.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/src/components/elements/Dropdown/__snapshots__',
    '/src/components/elements/Header/__snapshots__',
    '/src/components/elements/Heading/__snapshots__',
    '/src/components/elements/Image/__snapshots__',
    '/src/components/elements/Tag/__snapshots__',
    '/src/components/module/ProductListHeader/__snapshots__',
    '/src/components/module/ProductsDetailsList/__snapshots__',
    '/src/components/blocks/ProductsListHeading/__snapshots__',
    '/src/components/composer/ProductDetailsRoot/__snapshots__',
    '/src/pages/__snapshots__'
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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^assets(.*)$": "<rootDir>/src/assets$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^constants(.*)$": "<rootDir>/src/constants$1",
    "^actions(.*)$": "<rootDir>/src/actions$1",
  },
  testMatch: ['**/?(*.)+(spec|test).(js|jsx)?(x)'],
  // An array of file extensions which modules are using
  moduleFileExtensions: ['js', 'jsx'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],
};
