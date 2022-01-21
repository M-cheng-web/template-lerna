import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import coreConfig from './rollup.config'

coreConfig.output.forEach((item) => {
  item.sourcemap = true
})

coreConfig.plugins = [
  ...coreConfig.plugins,

  // 看需要决定要不要热更新,注意端口不能与核心库相同
  // livereload(),
  // serve({
  //   open: true, // 自动打开页面
  //   port: 3001, 
  //   openPage: '/example/index.html', // 打开的页面
  //   contentBase: ''
  // })
]

export default coreConfig;