const { readGitignoreFiles } = require("eslint-gitignore");

const gitignore = readGitignoreFiles({ cwd: __dirname });

module.exports = {
  root: true,
  ignorePatterns: [...gitignore, ".*lintrc.js"],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:import/recommended", "plugin:import/typescript", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    "no-alert": "error",
    "no-console": ["warn", { allow: ["error"] }],
    "no-unused-vars": ["warn"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-exports": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": ["error"],
    "import/no-extraneous-dependencies": ["off"],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
        enforceForRenamedProperties: false,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-explicit-any": "off",
        "no-void": [
          "error",
          {
            allowAsStatement: true,
          },
        ],
      },
    },
  ],
};
