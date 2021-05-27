module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: {
      presets: ['@vue/babel-preset-app'],
    },
  },
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
