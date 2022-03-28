const path =require('path')
module.exports = {
  chainWebpack: config => {
      config.module
          .rule('change-prefix')
          .test(/\.js$/)
          .include.add(path.resolve(__dirname, './node_modules/element-ui/lib'))
          .end()
          .use('change-prefix')
          .loader('change-prefix-loader')
          .options({
            prefix: 'el-',
            replace: 'gp-'
          })
          .end()
  },
}