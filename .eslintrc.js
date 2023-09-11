module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'], 
  parserOptions: {
    ecmaVersion: 2021, 
  },
  rules: {
    "quotes": ["off", "double"],
    "semi": ["off", "always"],
    'linebreak-style': 0, 
    'no-console': 0, 
  },
};