const addCssPrefix = require('postcss-change-css-prefix')

module.exports = {
  plugins: [
    addCssPrefix({
      prefix: 'el-',
      replace: 'gp-',
    }),
  ],
}