module.exports = {
  plugins: ['prettier-plugin-css-order'],
  sortCss: {
    order: 'alphabetical', // 속성 정렬 기준: 알파벳 순
  },
  endOfLine: 'auto',
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  bracketSpacing: true,
  arrowParens: 'always',
};
