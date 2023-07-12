/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { configDefaults } from 'vitest/dist/config.js'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'ansible/*', '.github', 'dev-dist', 'jenkins', 'nginx', '.firebase'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: "Henrique Bonfim",
        short_name: "Henrique",
        description: "Be my guest",
        theme_color: "#568f30",
        background_color: "#130c13",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})
