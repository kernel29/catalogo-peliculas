
import '/style.css';
import { filtrarPorSerieOPelicula } from './filter-function';

const section = document.querySelector("section");

let observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(element => {
        if (element.isIntersecting) {

            suma += 18;
            loadImages(suma, articulosFiltrados);

        }
    });

}, {
    rootMargin: '0px 0px 70px 0px',
    threshold: 0
});

function guardarEnLocalStorage(objeto) {
    const { imgGrande, nombre, genero, sinopsis } = objeto;
    localStorage.setItem('ruta', imgGrande);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('genero', genero);
    localStorage.setItem('sinopsis', sinopsis);
}

let suma = 0;

const loadImages = (numero, arrayFiltrado) => {

    for (let i = numero; i < arrayFiltrado.length; i++) {
        if (i >= numero && i < numero + 18) {
            const imagen = document.createElement('img'),
                  enlace = document.createElement('a');

            imagen.setAttribute('class', 'pelis');
            imagen.setAttribute('src', arrayFiltrado[i].imgMini);
            enlace.setAttribute('href', '/genero/info.html');
            enlace.setAttribute('target', '_blank');
            enlace.addEventListener('click', () => {
                guardarEnLocalStorage(arrayFiltrado[i]);
            });
            section.appendChild(enlace);
            enlace.appendChild(imagen);

        }

    }

    observarUltimaPelicula(arrayFiltrado);
}

// Filtrado de peliculas segun el tipo
const articulosFiltrados = filtrarPorSerieOPelicula('serie');

console.log(`Total Series ${articulosFiltrados.length}`);

loadImages(suma, articulosFiltrados);

function observarUltimaPelicula(array) {
    const peliculas = document.querySelectorAll('.pelis');
    const ultimaPelicula = peliculas[peliculas.length - 1];
    if (peliculas.length < 19) {
        observador.observe(ultimaPelicula);
    } else if (peliculas.length > 18 && peliculas.length < array.length) {
        observador.disconnect();
        observador.observe(ultimaPelicula);
    } else if (peliculas.length === array.length) {
        observador.disconnect();
    }
}


