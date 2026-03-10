import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ariiellus.eth.limo',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
