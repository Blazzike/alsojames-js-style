module.exports = {
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
