module.exports = {
  extends: [
    './index',
    'plugin:vue/essential',
  ],
  parserOptions: {
    babelOptions: {
      presets: ['@vue/babel-preset-app'],
    },
  },
  rules: {
    'no-param-reassign': 'off', // Vue depends
    'no-bitwise': 'off', // Vue depends
    'func-names': 'off', // Vue depends
    'vue/require-v-for-key': 'off', // Disagree - non-component loops don't need keys
  },
};
