// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        accion:       resolve(__dirname, 'genero/accion.html'),
        terror:       resolve(__dirname, 'genero/terror.html'),
        romance:       resolve(__dirname, 'genero/romance.html'),
        drama:       resolve(__dirname, 'genero/drama.html'),
        suspenso:       resolve(__dirname, 'genero/suspenso.html'),
        comedia:       resolve(__dirname, 'genero/comedia.html'),
        superheroes:       resolve(__dirname, 'genero/superheroes.html'),
        infantil:       resolve(__dirname, 'genero/infantil.html'),
        ciencia:       resolve(__dirname, 'genero/ciencia-ficcion.html'),
        main:                     resolve(__dirname, 'index.html'),
        peliculas:            resolve(__dirname, 'peliculas/peliculas.html'),
        series:               resolve(__dirname, 'series/series.html'),
        info:               resolve(__dirname, 'genero/info.html')
      },
    },
  },
})