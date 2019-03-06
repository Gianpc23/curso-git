const URL_GENEROS = 'https://ejemplos-dc1c1.firebaseio.com/generos.json';
const URL_PELICULAS = 'https://ejemplos-dc1c1.firebaseio.com/peliculas/';

function getGeneros() {
    let xhr = new XMLHttpRequest(); /**Creamos instancia */
    xhr.open('GET', URL_GENEROS);  /**La abrimos */
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            //           console.log(xhr.responseText);
            const generos = JSON.parse(xhr.responseText);/**Para acceder a los datos hay que parsearlos primero */
            const opcion = prompt(`Elige genero de peliculas: 0 (Terror) o 1 (Action)`);
            const generoElegido = generos[parseInt(opcion)];
            document.getElementById('tipo').textContent = generoElegido;
            getPeliculas(generoElegido);
        }
    });
    xhr.send();
}

function getPeliculas(genero) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL_PELICULAS + `${genero}.json`);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            let peliculas = JSON.parse(xhr.responseText);
            peliculas = Object.values(peliculas)[0];
            let ul = document.getElementById('lista-peliculas');
            ul.innerHTML = peliculas.map(elem => {
                return `<li>${elem}</li>`
            }).join('');
        }
    });
    xhr.send();
}


//getGeneros();

/**
 * AHORA CON PROMESAS
 */

function getGenerosProm() {
    return fetch(URL_GENEROS).then(resp => {
        return resp.json();   //.json también devuelve otra promsesa
    });
}

function getPeliculasProm(genero) {
    return fetch(URL_PELICULAS + `${genero}.json`).then(resp => {
        return resp.json();   //.json también devuelve otra promsesa
    });
}

function start() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Mi promesa funciona');
            //reject('Mi promesa NO funciona');
        }, 3000)
    });
}


//getGenerosProm()
start()
    .then(msg => {
        console.log(msg);
        return getGenerosProm();
    })
    .then(generos => {
        const opcion = prompt("Elige genero de peliculas: 0 (Action) o 1 (Terror)");
        const generoElegido = generos[parseInt(opcion)];
        let span = document.getElementById('tipo');
        span.textContent = generoElegido;
        return getPeliculasProm(generoElegido);
    }).then(peliculas => {
        peliculas = Object.values(peliculas)[0];
        let ul = document.getElementById('lista-peliculas');
        ul.innerHTML = peliculas.map(elem => {
            return `<li>${elem}</li>`
        }).join('');
    }).catch(err => {
        console.log('ERROR: '+err);
    });


