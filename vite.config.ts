import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  server: {
    host: true,
    port: 4444,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/styles/quasar/variables.sass',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core', 'quasar'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/**/*'],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
    }),
    yaml({
      transform(data) {
        return data === null ? {} : undefined;
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name].[hash].entry.js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: ({ name }) => {
          let extPath = '[ext]';
          if (/\.(gif|jpe?g|png|svg|tiff|bmp|ico)$/.test(name ?? '')) {
            extPath = 'images';
          }
          if (/\.css$/.test(name ?? '')) {
            extPath = 'css';
          }
          if (/\.(woff2?|ttf|eot|otf)$/.test(name ?? '')) {
            extPath = 'fonts';
          }
          return `assets/${extPath}/[name].[hash][extname]`;
        },
      },
    },
  },
});
