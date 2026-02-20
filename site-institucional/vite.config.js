import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// deploy fix
export default defineConfig({
  base: '/grupo-ampliacao/',
  plugins: [react()],
})
