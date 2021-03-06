module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'no-multi-assign': 0,
    'semi': 0,
    'no-return-assign': 0,
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'max-len': ["error", { "code": 200 }],
  },
};
