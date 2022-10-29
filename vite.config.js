import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3200,
  },
  build: {
    rollupOptions: {
      plugins: [
        resolve({
          browser: true,
          preferBuiltins: false,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    // scss resolve
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],    
  },
})
