import { defineConfig } from 'vite'
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
       build: {
              rollupOptions: {
                     input: Object.fromEntries(
                            globSync('src/views/*.html').map(file => [
                                   path.relative(
                                          'src',
                                          file.slice(0, file.length - path.extname(file).length)
                                   ),
                                   fileURLToPath(new URL(file, import.meta.url))
                            ])
                     ),
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