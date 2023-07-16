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
    "no-unexpected-multiline": "error"
  },
};
