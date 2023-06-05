import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'screen.html'),
        controller: resolve(__dirname, 'controller.html')
      },
    },
  },
})