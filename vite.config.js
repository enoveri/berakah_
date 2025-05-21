import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure the dev server responds to all routes
    historyApiFallback: true,
  },
  build: {
    // Generate a _redirects file for Netlify or similar hosting
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: './', // Use relative paths
});
