import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { defineConfig } from 'vite';

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
  ],
});
