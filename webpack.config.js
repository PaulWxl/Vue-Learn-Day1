//自定义打包路径的输入和输出

//导入html-webpack-plugin模块-得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')



// 这个{ } 语法 是es6 的 对象的 解构赋值 
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')
// const obj =  require('clean-webpack-plugin')
// console.log(obj)//obj 是一个对象， 对象里面有一个属性，属性名为CleanWebpackPlugin，值为一个数组，[class CleanWebpackPlugin]

const cleanPlugin = new CleanWebpackPlugin()








// 创建HTML插件的实例对象 
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html'//指定生成的文件的存放路径（存放在根目录中）
})

// 先导入Node.js中的路径模块
const path = require('path')


// 运用Node.js语法导出一个模块
// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
    //mode构建模式 分为development（开发）和production（生产）
    // mode: 'development'
    // mode: "production"
    mode: "development",
    devtool: 'nosources-source-map',


    //  插件的数组 将来webpack在运行时 会加载并调用这些插件
    plugins: [htmlPlugin, cleanPlugin],//通过plugins节点，使htmlPlugin插件生效。

    // entry属性 定义打包入口文件的路径 
    // __dirname表示这个代码所在文件的路径 
    // entry: '指定要处理哪个文件'
    entry: path.join(__dirname, './src/index1.js'),

    // output属性 它是一个对象 
    // output 指定生成的文件要存放到哪里
    output: {
        // path属性  定义输出文件的存放路径
        // path 存放的目录 
        path: path.join(__dirname, './dist'),

        // filename属性 定义输出文件的名称
        // filename 生成的文件名
        filename: 'js/bundle.js'
    },



    devServer: {
        open: true,// 初次打包完成后，自动打开浏览器


        // 默认地址是域名localhost,host可以把默认地址改成一个ip地址
        host: '127.0.0.1',//实时打包所使用的主机地址



        // 在http协议中，如果端口号为80， 则可以被省略 ，但是如果是8080，则不可以被省略。
        port: 80//实时打包所使用的端口号 
    },




    // 所有 webpack 第三方文件模块的匹配规则，会放到 module 对象 中 
    module: {
        //rules 数组 表示文件后缀名的 匹配 规则 以及 使用use数组 里面的 加载器 

        // 注意，rules数组中可以定义多个test 
        rules: [
            // 1. 处理css文件的loader
            {
                // test 使用了 正则表达式 /内容/  $表示以这个结尾 \表示转义字符 
                test: /\.css$/,
                // use数组 表示 当匹配到 test 中 文件后缀的 文件 时  使用use数组 里的 加载器， 需要注意的是， use 数组 里的 加载器 是有顺序之分的 . 加载器 在调用时 是 从后往前 调用的。 
                use: ['style-loader', 'css-loader']
            },


            // 2. 处理less文件的loader
            {
                test: /\.less$/,
                //注意 loader的顺序有严格要求， 从后往前调用。
                use: ['style-loader', 'css-loader', 'less-loader']
            },

            // 3. 处理图片文件的loader
            {
                test: /\.jpg|png|gif$/,
                // 当use中的loader 只有一个时 use可以为一个字符串， 仍然为 数组 也可以。如果需要使用多个loader ， 则 必须 把 use 作为 数组。
                // 在配置 url-loader 的 时候， 多个参数之间 使用 & 符号 进行 分隔。 
                use: ['url-loader?limit=470&outputPath=images']
            },

            {
                test: /\.js$/,
                use: ['babel-loader'],
                //在配置babel-loader时， 第三方包不用管兼容性，所以一定要 “排除”掉node_modules(第三方包) 中的 JS 文件。
                exclude: /node_modules/
            },




        ]
    },


    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }


    // output: {
    //     path: path.join(__dirname, './dist'),
    //     filename: 'bundle.js'
    // }
    
}

// 这个配置文件是给webpack用的,这个配置文件会在npm run dev 后立马被读取。在真正运行webpack之前，会读取webpack的配置文件。

// mode属性如果改成 production 就可以 进行 代码压缩 注意，如果更改了webpack.config.js文件 里面的内容 就应该重新在终端中运行脚本（npm run dev）
// 一般production是在上线时使用 development是在开发时使用 


//那么为什么webpack知道要处理src文件夹下的index.js文件呢？

//原因：在webpack 4.x 和5.x 的版本中，有如下的默认约定：①默认的打包入口文件为src-> index.js②默认的输出文件路径为dist -> main.js注意：可以在webpack.config.js 中修改打包的默认约定







// module.exports = {} 是什么语法

// 这是 Node.js 中的一个常见语法，用于导出一个空对象。在 Node.js 中，每个文件都被视为一个模块，可以通过 require() 函数来引入其他模块中导出的内容，在一个模块中定义的内容默认是私有的，如果需要在其他模块中使用它们，就需要将其导出。

// 使用 module.exports = {} 的语法可以将一个空对象导出，即使在当前模块中没有定义任何变量或函数，这样其他模块也可以通过 require() 使用该对象。

// 例如，在一个名为 myModule.js 的文件中，如果需要导出一个空对象，可以这样写：

// module.exports = {};
// 这样当其他模块引入该模块时，就可以像下面这样访问该空对象：

// const myModule = require('./myModule');
// console.log(myModule); // {}



