import { defineConfig } from 'vite';

export default defineConfig({
   base: '/google_search/',
   define: {
      'process.env': process.env,
   },
});
