module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order", "stylelint-config-prettier"],
  ignoreFiles: ["node_modules"],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
      rules: {
        "function-name-case": null,
        "value-keyword-case": null,
      },
    },
  ],
};
