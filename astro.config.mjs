import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  trailingSlash: "always",
  site: "https://huaming-en.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
