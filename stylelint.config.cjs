/** @type { import('stylelint').Config } */
const config = {
  extends: [
    "stylelint-config-prettier",
    "stylelint-config-recommended",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-order"],
  ignoreFiles:['**/*.cjs', '**/*.js','**/*.jsx'],
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx",
      ],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
};

module.exports = config;
