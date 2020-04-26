module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'vue/html-quotes': 'error',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/order-in-components': ['error'],
    'template-curly-spacing': 'off',
    indent: 'off',
  },
  overrides: [{
    files: [
      '**/*.spec.js', // for test spec files
    ],
    env: {
      jest: true, // enable jest env
    },
  }],
};