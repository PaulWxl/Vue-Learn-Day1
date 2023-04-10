// 声明 babel 可用的插件
// 将来 webpack 在调用 babel-loader 的时候，会先加载 babel.config.js 中的 plugins 插件来使用
module.exports = {
    plugins: [
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }]
    ]
  }
//这个插件的代码不用记，去官网找就行了。
//'https://babeljs.io/docs/babel-plugin-proposal-decorators' 但是官网找的代码有点问题！！！！还是记住吧。复制到文件里保存下来。


