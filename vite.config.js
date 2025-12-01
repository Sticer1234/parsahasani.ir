import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';


// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    react(),
    tailwindcss(),
    viteImagemin({
      mozjpeg: { quality: 75 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.8] },
      gifsicle: { optimizationLevel: 3 },
      svgo: { plugins: [{ name: "removeViewBox", active: false }] },
    }),
  ]
  ,
})
