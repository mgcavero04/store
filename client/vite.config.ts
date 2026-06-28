import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5263',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [
    react(),
    mkcert()
  ],
})
