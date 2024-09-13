import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure that the output directory is set to 'dist'
  },
  assetsInclude: ['**/*.glb'],
})
