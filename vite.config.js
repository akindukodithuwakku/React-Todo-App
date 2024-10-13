import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Adding new port
  },
  build: {
    outDir: "build", // Change output directory to 'build'
  },
});
