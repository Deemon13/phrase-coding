import { defineConfig } from "vite";

export default defineConfig({
  base: "/phrase-coding/",
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
