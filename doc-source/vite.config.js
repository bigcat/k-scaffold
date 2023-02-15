import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'X': fileURLToPath(new URL('../', import.meta.url))
    }
  },
}