module.exports = {
  extends: ["plugin:react/recommended", "next/core-web-vitals"],
  env: { es6: true },
  rules: {
    "@next/next/no-img-element": "off",
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@/common/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@/modules/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/first": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": "error",
    "simple-import-sort/exports": "error",
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@next/next",
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "import",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
