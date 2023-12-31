// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  overrides: [],
  settings: {},
  rules: {
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-constant-condition': ['warn'],
    'no-cond-assign': ['warn'],
    'no-inner-declarations': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false,
        },
      },
    ],
  },
};
