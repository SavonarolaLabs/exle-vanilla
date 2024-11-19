// vite.config.js
import { defineConfig } from 'vite';
import string from 'vite-plugin-string';

export default defineConfig({
  plugins: [
    string({
      // Process all HTML files as strings
      include: '**/*.html',
    }),
  ],
});
