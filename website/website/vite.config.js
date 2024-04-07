import { defineConfig } from 'vite';
import polyfillNode from 'rollup-plugin-polyfill-node';
import reactSvgPlugin from 'vite-plugin-react-svg';
import react from '@vitejs/plugin-react';


export default defineConfig({
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1500
  },
  plugins: [
    polyfillNode(),
    react(),
    reactSvgPlugin()
  ],
  server: {
    host: 'localhost',
    port: 3000,
    https: true,
  },
});
