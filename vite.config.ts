import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use a base path suitable for GitHub Pages hosting at
  // https://<username>.github.io/<repo>/ so assets resolve correctly.
  // Replace with './' if you prefer relative paths for other hosts.
  base: '/physics-simulator/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }), tailwindcss()
  ],
})
