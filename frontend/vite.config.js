import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy /api requests to backend during development
    proxy: {
      '/api': {
        target: 'https://musicapp-backend-ykxf.onrender.com',
        changeOrigin: true,
      }
    }
  }
})
