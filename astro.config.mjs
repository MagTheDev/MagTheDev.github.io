import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://magthe.dev',
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [vue()]
});