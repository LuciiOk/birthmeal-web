import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3200,
  },
  // Rollup failed to resolve import "react-hot-toast" from "src/App.jsx".
  // This error can be caused by importing a non-existent file or directory, or by importing a file without an extension.
  // If you're trying to import a file, please ensure that the file extension is included.
  // If you're trying to import a directory, please ensure that the directory has an index file.
  // resolve: {
  resolve: {
    alias: {
      'react-hot-toast': 'react-hot-toast/dist/index.js',
    },
  },
})
