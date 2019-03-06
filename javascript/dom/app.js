
let h1 = document.querySelector('h1');
console.log(h1);


let listItems = document.getElementsByClassName('mascota');
//console.log(listItems[0].textContent);

function guardarMascota() {
    let inputNuevaMascota = document.getElementById('input-mascota');
    console.log(inputNuevaMascota.value);
}

function cambiarTitulo(nuevoTitulo) {
    let h1 = document.querySelector('h1');
    console.log(h1);
    h1.textContent = nuevoTitulo;
}

let ul = document.querySelector('ul');
let nodoLi = document.createElement('li');
let textoLi = document.createTextNode('Periquito');

nodoLi.setAttribute('id', 'Periquito');
nodoLi.appendChild(textoLi);


ul.appendChild(nodoLi);

/**Versus */
ul.innerHTML += "<li>Pez</li>";



// let lista = [];
// let l3 = document.getElementsByClassName('currency-name-container link-secondary');
// for (let i = 0; i < l3.length; i++) {
//     lista.push(l3[i].text);
// }
// lista = lista.sort();
// console.log(lista);

function addEventListenersToListItems() {
    let listI = document.getElementsByTagName('li');
    for (let li of listI) {
        // li.onclick = function(event){        YA NO SE USA
        //     console.log(event);
        //     let elementLi = event.target;
        //     cambiarTitulo(elementLi.textContent);
        // }
        li.addEventListener('click', (event) => {
            // console.log(event);
            let elementLi = event.target;
            cambiarTitulo(elementLi.textContent);
        });
        li.addEventListener('click', (event) => {
            let elementLi = event.target;
            console.log(elementLi.textContent);
        });
    }
}

function anyadirEventButton() {
    let button = document.getElementById('btn-guardar');
    button.addEventListener('click', () => {
        let inputNuevaMascota = document.getElementById('input-mascota').value;
        ul.innerHTML += `<li>${inputNuevaMascota}</li>`;
    })
}
anyadirEventButton();
