import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper/react': 'swiper/react/swiper-react.js',
    },
  },
  optimizeDeps: {
    include: ["swiper"],
  },
})
