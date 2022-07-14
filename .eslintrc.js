module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    'object-shorthand': ['error', 'properties'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-restricted-exports': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: ['.eslintrc.*', 'vitest.config.*'],
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        'max-lines': 'off',
        'no-console': 'off',
      },
    },
  ],
}
