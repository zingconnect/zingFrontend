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
    exclude: ['flutterwave-node-v3', 'aws-sdk'] 
  }
})