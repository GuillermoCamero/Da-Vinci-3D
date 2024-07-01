import { defineConfig } from 'vite'
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

function getHtmlEntries(pagesDir) {
  const entries = {};

  // Read all files in the directory
  const files = fs.readdirSync(pagesDir);

  // Filter out HTML files
  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  // Create entries for each HTML file
  htmlFiles.forEach((file) => {
    const name = path.basename(file, ".html");
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}

export default defineConfig({
       base: '',
       build: {
              rollupOptions: {
                     input: getHtmlEntries("."),
                     output: {
                            manualChunks(id) {
                                   if (id.includes('node_modules')) {
                                          return id.toString().split('node_modules/')[1].split('/')[0].toString();
                                   }
                            }
                     }
              },
       }
})