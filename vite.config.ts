import { defineConfig } from 'vite'
import { resolve } from 'path'
import mkcert from 'vite-plugin-mkcert'
export default defineConfig({
  server: { https: true },
  plugins: [mkcert()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'screen.html'),
        controller: resolve(__dirname, 'controller.html')
      },
    },
  },
})