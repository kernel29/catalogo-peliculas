import { articulos } from "./array-articulos";

export const filtrarPorGenero = (genero) =>{  // fn2
    return articulos.filter(item => item.genero.includes(genero))
}
export const filtrarPorTipo = (array) => {  // fn1
    return array.filter(element => element.tipo === 'pelicula');
}

export const filtrarPorSerieOPelicula = (tipo) => articulos.filter(element => element.tipo === tipo);

export const compose = (fn1, fn2) => data => fn1(fn2(data));


