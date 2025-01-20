import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [],
  site: 'https://asdfgh20220610.github.io',
  experimental: {
    assets: false
  }
});
