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
    // Increase limit slightly to avoid warnings for large bundles
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      // If you are absolutely certain you have removed all imports of 
      // these packages from your React components, you can remove these.
      // If the build fails, keep these here.
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