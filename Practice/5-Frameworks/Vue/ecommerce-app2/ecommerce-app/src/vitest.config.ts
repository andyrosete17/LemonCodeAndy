import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
});
