import react from '@vitejs/plugin-react-swc'
import path from "path"
import { defineConfig } from 'vite'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuração do Shadcn/UI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 443,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './certificates/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './certificates/server.crt'))
    }
  }
});
