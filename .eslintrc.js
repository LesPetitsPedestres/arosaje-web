module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'warn',
    'spaced-comment': 'warn',
  },
}
