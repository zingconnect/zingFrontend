import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000, 
    rollupOptions: {
      external: [
        'flutterwave-node-v3', 
        'aws-sdk'
      ],
    },
  },
  optimizeDeps: {
    // Ensure these aren't pre-bundled by Vite as they are Node-only
    exclude: ['flutterwave-node-v3', 'aws-sdk'] 
  }
})