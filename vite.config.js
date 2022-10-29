import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3200,
  },
  // `build.rollupOptions.external` react-hot-toast
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'react-hot-toast'],
    },
  }
})
