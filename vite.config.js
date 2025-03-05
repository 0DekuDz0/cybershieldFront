import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  ssr: {
    noExternal: ["@mui/material", "@mui/system", "@mui/icons-material"],
  },
  build: {
    sourcemap: false,
  },
})
