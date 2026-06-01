// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['raw.githubusercontent.com', 'img.itch.zone'],
  },
  integrations: [mdx()],
});
