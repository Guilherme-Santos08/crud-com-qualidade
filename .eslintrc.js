module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true,
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'cypress',
    'chai-friendly',
    'no-only-tests',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '_explicacoes/'],
  // Cherry of the Cake
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'no-only-tests/no-only-tests': 'error',
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
}
