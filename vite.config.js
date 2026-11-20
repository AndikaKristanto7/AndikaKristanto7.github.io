import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative asset paths so the build works on GitHub Pages / any sub-path.
  base: './',
  server: {
    // The project lives on a Windows drive (/mnt/d) accessed from WSL, where
    // file-change events don't propagate reliably. Polling keeps hot reload working.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
