import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), TailwindCSSVitePlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
