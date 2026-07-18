import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev server runs at root ('/') for convenience.
// Production builds use the GitHub Pages subpath until the custom domain is active.
// Once automation-integration.com DNS is live: change production base back to '/'
// and remove basename from BrowserRouter in src/main.jsx.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/automation-integration/',
}))
