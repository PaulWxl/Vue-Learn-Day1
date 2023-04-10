// es6 语法 导入 msg.js 中 暴露的 模块 （导出的 模块 ）
//msg 用来 接收 从 msg.js 中 导出 的 模块




// 建议大家使用 @ 表示 src 源代码目录，从外往里查找；不要使用 ../ 从里往外查找
    //     @/msg.js

    // console.log(msg) 



    // 使用@ 需要在webpack.config.js 中 配置：(resolve 和 plugins同级)
    // resolve: {
    //     alias: {
    //         // 告诉 webpack , 程序员写的代码中 ， @ 符号 表示 src 这一层 目录。 
    //         '@': path.join(__dirname, './src/')
    //     }
    // }



// import msg from '../../msg'
import msg from '@/msg'
console.log(msg)