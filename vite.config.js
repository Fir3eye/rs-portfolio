import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rs-portfolio/',  // Add the base URL for your GitHub repository
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
