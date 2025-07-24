vite的预加载
```js
import _ from 'lodash'
```
在处理过程中如果说看到了有非绝对路径或者相对路劲的引用，他则会尝试开启路径补全的操作
```js
import _ from '/node_modules/.vite/'
```
vite 找寻依赖的过程是从当前文件开始，一层一层的向上查找，直到找到根目录为止 
import { something } from 'some-package'

/Users/you/my-app/
├── src/
│   └── pages/
│       └── Home.tsx   👈 当前文件
├── node_modules/
│   └── some-package/
├── vite.config.ts

1. 先在 src/pages/node_modules/some-package 找 —— 没有；

2. 再去 src/node_modules/some-package 找 —— 没有；

3. 然后是 node_modules/some-package —— 找到了；


工具	主要职责	            性能	       写于哪种语言
ESBuild	打包 + 编译 + 转译	    ⚡极快	       Go（并发强）
Babel	JS/TS 的语法转换	    较慢	       JavaScript
Webpack	功能最全但偏重、较慢	 慢	            JavaScript

生产和开发环境的区别
yarn dev 每次依赖预构建所重新构建的相对路径都是正确的

生产模式 vite 会全权交给一个叫rollup的工具来进行打包

commonjs 规范导出 module.exports = {}
依赖预构建 vite 会找到对用的依赖，然后调用EsBuild(对js语法进行转换成ESModule规范)，然后放到当前目录下的node_modules/.vite/deps 目录下
1. 不同的第三方包会有不同的导出格式
2. 一次性对路径的处理可以直接使用.vite/deps ,方便路径重写
3. 网络多包传输的问题，减少了网络请求


npm install lodash-es -S 
安装lodash的es版本，vite 默认会将export 的内容加到 js中，新生成一个js
vite.config.js  === webpack.config.js  
```js
export default {
    optimizeDeps:{
        exclude:['lodash-es']
    }
}
```
会请求很多个js,增加了网络请求


有了依赖预构建，无论有多少个额外的export和import,vite都会尽可能的将他们进行集成最后只生成一个js文件

