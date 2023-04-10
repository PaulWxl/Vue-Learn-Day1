// 在index.js文件中使用ES6语法，导入jquery模块 
// 语法：import xxx form '模块名'  一般当模块名为jquery时 xxx命名为$ 用$接收jquery模块


// 在使用ES6import导入之前，必须先使用npm（Node.js的包管理器）安装jquery包。(npm install jquery) 

// 导入样式 在 webpack 中 一切皆模块 都可以通过ES6 导入语法进行导入和使用
//import '路径'
// import './css/index.css'

// 引入less 文件 
// import './css/index.less'


import './css/css/index-less.css'


// 这种是导入文件的写法，没有接收，也可以接收。比如：
//   import a from './css/index.css' 
//   import b from './css/index.less'   log a,b 之后，发现是undefined,所以这种文件不用接收。可以不用加from。

// 1. 使用 ES6 导入语法，导入 jQuery模块
// 注意报错：不能在模块外使用import语句
import $ from 'jquery'
// console.log($)


import './js/test/info'

// 1. 导入图片  得到图片文件
// 2. 给 img标签 的 src 动态赋值 
// 3. 加载图片也需要对应的loader 

// webpack 中 一切都可以导入 被看做是模块 
import logo from  './images/logo.jpg'
console.log(logo)
$('.box').attr('src', logo)//先用jquery选中这个元素，然后用attr方法给src属性进行赋值操作 



// 2. 定义 jQuery 的入口函数  语法： $(function() {})   注意 $() 括号里面函数作为参数
  // 3. 函数内部实现奇偶行变色
  // 奇数行(odd)为红色 
//   偶数行(even)为粉色 
$(function() {
    $('li:odd').css('background-color','#6c99c5')
    $('li:even').css('background-color', 'skyblue')
})
// 注意，这里的odd和even是按照索引来取的，第一个li的索引是0


//到这一步，如果什么都没做，会报错。浏览器控制台中输出：不能在模块外使用import语句。所以还得安装Webpack的两个包。
// npm install Webpack Webpack-cli --save-dev   (--save-dev 可以简写为-D，表示将这个包安装在package.json文件中的devdependencies属性中，表示只在开发和测试中的依赖项。)
// 需不需要加-dev 可以在网站'npmjs.com/'中搜索响应的包，上面有写是否带-dev 





//------------------------------------------------

//装饰器（React高级中的语法）
//定义一个装饰器函数
function info(target) {
  target.info = 'Person-----info'
}


//定义一个空的Person类
//为 Person类 应用 info装饰器
@info 
class Person {}

//info 装饰器 指向 Person 类 ， 那么 参数 target 指向的 也是 Person 类 
console.log(Person.info)


