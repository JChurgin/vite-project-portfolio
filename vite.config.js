import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/vite-project-portfolio/",
  build: {
    rollupOptions: {
      external: ['react-icons']
    }
  }
})

