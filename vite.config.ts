import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import Inspect from 'vite-plugin-inspect';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Components({
      extensions: ['vue', 'md', 'svg'],
      directoryAsNamespace: true,
      dts: true,
      globalNamespaces: ['global'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
