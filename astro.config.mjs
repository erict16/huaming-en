import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const ghPages = process.env.GH_PAGES === "true";

export default defineConfig({
  trailingSlash: "always",
  site: "https://erict16.github.io",
  base: ghPages ? "/huaming-en" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
