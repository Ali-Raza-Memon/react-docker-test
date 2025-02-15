import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allow access from Docker
    port: 5173,  // Ensure the port is correctly set
    strictPort: true,  // Prevent fallback to a different port
  },
})
