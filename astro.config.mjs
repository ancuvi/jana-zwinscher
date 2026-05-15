import { defineConfig } from 'astro/config';

// GitHub-Pages-Preview-Setup. Für die finale Netlify-Domain einfach
// `site` auf https://jana-zwinzscher.de setzen und `base` löschen.
export default defineConfig({
  site: 'https://ancuvi.github.io',
  base: '/jana-zwinscher/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
