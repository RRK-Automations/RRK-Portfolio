import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Fix 404 on page refresh for SPA routes — all paths fall back to index.html
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
