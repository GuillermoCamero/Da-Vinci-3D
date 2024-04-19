const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        aliante: resolve(__dirname, 'aliante.html'),
        espejos: resolve(__dirname, 'espejos.html'),
        espiral: resolve(__dirname, 'espiral.html')
      }
    }
  }
}