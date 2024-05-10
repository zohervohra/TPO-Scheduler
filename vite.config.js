import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "https://vegahackathonbackend-9c856453c60a.herokuapp.com/"
    },
  },
  plugins: [react()],
})
