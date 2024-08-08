import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import clerk from "@clerk/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
  
});