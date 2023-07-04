# change-element-ui-prefix-demo

### 环境
* vue-cli: 4.5.13
* node 10.5.0及以上
* element-ui ^2.15.6

### 项目启动

不多做介绍

### 快速上手
1. npm i change-prefix-loader postcss-change-css-prefix -D

2. 修改vue.config.js文件（如果没有，自行新建）

3. 修改postcss.config.js文件（如果没有，自行新建，若报错找不到postcss，请自行安装，一般都有这个依赖）

4. npm run serve, 打开浏览器调试，即可发现前缀已被替换

```
<!-- vue.config.js -->

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
```

```
<!-- postcss.config.js -->
const addCssPrefix = require('postcss-change-css-prefix')

module.exports = {
  plugins: [
    addCssPrefix({
      prefix: 'el-',
      replace: 'gp-',
    }),
  ],
}

```

### 注意
el-container direction为vertical时，需要主动声明，目前**子元素中有 el-header 或 el-footer 时为 vertical**不会生效