import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jana-zwinscher.de',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
