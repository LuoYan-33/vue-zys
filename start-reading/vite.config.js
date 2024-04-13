import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        cors: true,
        open: true,
        port: 1000,
        proxy: {
            '/api': {
                target: 'http://localhost:5008',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/api/, '')
            }
        }
    }
})
