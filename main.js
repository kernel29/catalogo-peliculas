// PATRON MODULO: crea un nuevo scope y al no tener una referencia por nombre no sera posible llamar al objeto directamente
// (() => {
//     'use strict'
// })();

import '/style.css?v=1.0';
import { articulos } from '/src/assets/js/array-articulos';

const section = document.querySelector('section');

articulos.forEach((item, index) => {
    if (index < 24) {
        const imagen = document.createElement('img');
        const enlace = document.createElement('a');
        imagen.setAttribute('class', 'pelis');
        imagen.setAttribute('src', item.imgMini);
        enlace.setAttribute('href', '/genero/info.html');
        enlace.setAttribute('target', '_blank');

        // evento para mostrar la informacion de la pelicula
        enlace.addEventListener('click', () => {
            localStorage.setItem('ruta', item.imgGrande);
            localStorage.setItem('nombre', item.nombre);
            localStorage.setItem('genero', item.genero);
            localStorage.setItem('sinopsis', item.sinopsis);
        })
        section.appendChild(enlace);
        enlace.appendChild(imagen);
    }
})




