module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier", "plugin:vitest/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["vitest"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "semi": ["error", "never"],
    "@typescript-eslint/semi": "off",
    "no-unexpected-multiline": "error",
    "@typescript-eslint/naming-convention": "off",
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_', "argsIgnorePattern": "^_" }],
  },
};
