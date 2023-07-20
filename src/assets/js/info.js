import '/style.css';

const nombre        = document.querySelector('.nombre'),
      headTitle     = document.querySelector('title'),
      genero        = localStorage.getItem('genero'),
      arrayGenero   = genero.split(',');

headTitle.textContent = `${localStorage.getItem('nombre')}`;

document.querySelector('.containerInfo').innerHTML = `
        <img src="${localStorage.getItem('ruta')}">
        <p>Genero: ${arrayGenero.join(', ')}</p>
        <p>${localStorage.getItem('sinopsis')}</p>
`
document.querySelector('span').addEventListener('click', () => {

        localStorage.removeItem('ruta');
        localStorage.removeItem('nombre');
        localStorage.removeItem('genero');
        localStorage.removeItem('sinopsis');
        window.close();
})

nombre.textContent = `${localStorage.getItem('nombre')}`;
