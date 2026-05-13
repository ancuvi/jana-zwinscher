import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Bitte später durch die echte Domain ersetzen (wirkt sich auf Sitemap & OG-Tags aus)
  site: 'https://jana-zwinzscher.de',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
