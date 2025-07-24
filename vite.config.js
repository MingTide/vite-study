import {defineConfig} from "vite"
import viteBaseConfig from "./vite.base.config"
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

const envReslver = {
  build: ()=>{ 
    console.log("开发环境");
    
    return Object.assign({},viteBaseConfig,viteProdConfig)
  },
  serve: ()=>{ 
    console.log("生产环镜");
    return Object.assign({},viteBaseConfig,viteDevConfig)},
}
export default defineConfig(({ command, mode }) => {
  // envReslver[command]()
  if (command === 'serve') {
    console.log("开发环境");
    return {
      // dev 独有配置
    }
  } else {
    console.log("生产环镜");
    // command === 'build'
    return {
      // build 独有配置
    }
  }
})

