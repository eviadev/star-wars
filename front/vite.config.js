import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api-sw': {
        target: 'https://swapi.info/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api-sw/, ''),
        secure: false,
      },
    },
  },
});
