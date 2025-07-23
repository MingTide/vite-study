官方文档: https://cn.vite.dev/guide/why.html

当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。

造成的结果: 需要很长时间才能启动
webpack 支持多种模块
```js
const lodash = require("lodash") commonjs规范
import Vue from "vue" // es6 module  规范
```
webpack的编译原理 AST 抽象语法分析的工具
转换结果
```js
const lodash = webpack_require("lodash")
const Vue = webpack_require("vue")
```
```js
立即函数
(function(modules){
function webpack_require(){}
module[entry](webpack_require)
},(
"./src/index.js":(webpack_require)=>{
const lodash = webpack_require("lodash")
const Vue = webpack_require("vue")
}

))
```
因为webpack支持多种模块化，必须要同意模块化，意味着所有的依赖都要读取一遍
vite是基于es module，省去了读取依赖步骤 不支持这种语法const lodash = require("lodash")

yarn create vite 
1. 帮我们安装一个东西： create-vite(vite的脚手架)
2. 直接运行一个 create-vite bin目录下的一个执行配置

认为官网使用 yarn create vite 构建项目也是vite做的事情
 create-vite 内置了vite


使用vue-cli 会内置webpack


