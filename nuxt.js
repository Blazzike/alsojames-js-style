module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          ['~', '.'],
        ],
      },
    },
  },
};
