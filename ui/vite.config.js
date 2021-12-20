import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFile } from 'fs/promises'
const version = JSON.parse(await readFile(new URL('./package.json', import.meta.url))).version


export default defineConfig(async ({ command, mode }) => ({
  define: {
    __UI_VERSION__: JSON.stringify(version)
  },
  // plugins: [
  //   vue(),
  //   // await QuasarPlugin({
  //   //   appPaths,
  //   //   loadQuasarConf: true
  //   // })
  // ],
  build: {
    lib: {
      // UMD not supported for code-splitting builds
      formats: ['es'],
      entry: './src/index.js'
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'quasar']
    }
  }
})
)
