import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// /api goes to the form backend (naxatranew-backend) while developing; `vite preview` reuses this proxy.
const api = { '/api': process.env.VITE_DEV_API ?? 'http://localhost:5000' }

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { proxy: api },
})
