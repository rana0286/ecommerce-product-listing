module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parser: "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "indent": ["error", 2],
    "semi": "error",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 120

      }
    ]
  },

  plugins: [
    "prettier"
  ]
};
