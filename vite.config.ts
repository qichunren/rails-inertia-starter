import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false, // 禁用 public 目录
  build: {
    outDir: resolve(__dirname, 'app/assets/builds'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/javascript/entrypoints/inertia.js'),
        global: resolve(__dirname, 'app/javascript/entrypoints/global.css'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    },
  }
})
