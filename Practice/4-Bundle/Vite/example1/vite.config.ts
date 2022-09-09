import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  build: {
    rollupOptions: {
      plugins: [typescript({ noEmitOnError: true })],
    },
  },
});