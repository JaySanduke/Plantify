import { defineConfig, esbuildVersion } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    cssMinify: false,
    minify: false,
  }
})