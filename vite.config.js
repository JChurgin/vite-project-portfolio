import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/vite-project-protfolio/",
  build: {
    rollupOptions: {
      external: ['react-icons/Bs']
    }
  }
})

