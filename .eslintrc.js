module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended'],
  parser: "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "indent": ["error", 2],
    "semi": "error",
    "no-console": "off",
  },
  plugins: [
    "react",
    "jsx-a11y",
  ]
};
