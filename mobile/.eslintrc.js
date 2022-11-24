module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      files: [
        '*.tsx', '*.ts'
      ],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
  }
}
