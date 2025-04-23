import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default for Vite, but good to be explicit
  },
  server: {
    port: 5173, // optional, for local dev
  }
})
