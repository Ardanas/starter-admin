import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd())
  return {
    server: {
      port: env.VITE_PORT || 8082,
      open: true,
    },
    plugins: [
      vue(),
      Pages(),
      Layouts(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          'vue',
          'vue-router',
        ],
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dirs: ['src/composables', 'src/utils', 'src/stores'],
        dts: './auto-imports.d.js',
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: false,
      }),
      // https://www.npmjs.com/package/vite-plugin-image-optimizer
      ViteImageOptimizer(),
      visualizer({
        filename: '.build-report.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/index.scss" as *;`,
        },
      },
    },
    esbuild: {
      drop: env.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : [],
    },
  }
})
