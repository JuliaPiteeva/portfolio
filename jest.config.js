module.exports = {
  transform: {
    // обрабатываем `*.vue` файлы с помощью `vue-jest`
    // обрабатывать js с помощью `babel-jest`
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  // сообщаем Jest что необходимо обрабатывать `*.vue` файлы
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["js", "json", "vue", "jsx", "node"],
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
  },
};
