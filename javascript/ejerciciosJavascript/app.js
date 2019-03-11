function ejercicio1() {
    let acc = 0;
    let aux = true;
    do {
        let opcion = confirm("Quieres sacar una carta?")
        if (opcion) {
            let randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            console.log("RANDOM NUM: " + randomNum);
            acc += randomNum;
            console.log("ACUMULADOR: " + acc);
            if (acc > 20) {
                aux = false;
                alert("Has PERDIDO");
            }
        } else {
            if (acc <= 20) {
                aux = false;
                alert("Has GANADO!");
            }
        }
    } while (aux);
    console.log("FIN");
}

function ejercicio2() {
    let lista = document.getElementById('lista').children;
    lista[0].innerHTML += '<li>2</li>';
    let textnode = document.createElement("li");
    textnode.innerHTML = "4";
    lista[2].parentNode.replaceChild(textnode, lista[2]);

}

/**
 * <div>
        <img id="img" src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro-slide.jpg"
            alt="Nada" srcset="">
    </div>
    <button id="atras">Atras

    </button>
    <button id="adelante">Adelante

    </button>
 */
function ejercicio3() {
    let arrImagenes = ["https://ar.zoetis.com/_locale-assets/mcm-portal-assets/publishingimages/especie/caninos_perro_img.png", "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro-slide.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijYvD7hd4ya5QO1TwvtvVZCTV0OwkzqpDfMTtDjxRBKMOyfKHyg"
    ];
    let index = 1;
    let btnAtras = document.getElementById('atras');
    let btnAdelante = document.getElementById('adelante');
    let img = document.getElementById('img');
    btnAtras.addEventListener('click', () => {
        if (index > 0) {
            index--;
            img.setAttribute("src", arrImagenes[index]);
        }
    });
    btnAdelante.addEventListener('click', () => {
        if (index < arrImagenes.length - 1) {
            index++;
            img.setAttribute("src", arrImagenes[index]);
        }
    });
}


{/* <div id="div">

</div>
<form action="">
    <fieldset>
        <legend>Nuevo gasto o ingreso:</legend>
        Nombre:<br>
        <input type="text" name="nombre" id="nombre"><br>
        Valor:<br>
        <input type="text" name="valor" id="valor"><br><br>
        <button id="btn">Enviar</button>
    </fieldset>
</form> */}

function ejercicioAjax() {
    const URL_GASTOS = 'https://ejemplo-d49a3.firebaseio.com/ingresos-gastos.json';
    return fetch(URL_GASTOS).then(resp => {
        return resp.json();
    }).then(listaDatos => {
        listaDatos = Object.values(listaDatos);
        let list = document.createElement('ul');
        for (let i = 0; i < listaDatos.length; i++) {
            // Create the list item:
            let item = document.createElement('li');
            if (listaDatos[i].qty <= 0)
                item.style.backgroundColor = "red";
            else
                item.style.backgroundColor = "green";
            // Set its contents:
            if (listaDatos[i].concept != null) {
                item.appendChild(document.createTextNode(listaDatos[i].concept));
                list.appendChild(item);
            }
        }
        document.getElementById('div').appendChild(list);
        let btn = document.getElementById('btn');
        btn.addEventListener('click', () => {
            ejercicioAjax2(document.getElementById('nombre').value, document.getElementById('valor').value);
        });
    });

}
function ejercicioAjax2(nombre, valor) {
    const URL_GASTOS = 'https://ejemplo-d49a3.firebaseio.com/ingresos-gastos.json';
    return fetch(URL_GASTOS, {
        method: 'POST',
        body: JSON.stringify({ concept: nombre, qty: valor })
    }).then(resp => {
        return resp.json();
    }).then(datos => {
        console.log("Almacenado: " + datos);
    });

}

//ejercicioAjax();
//ejercicioAjax2();

/**Ejercicio 1 Events */
/**Añadir un script en la etiqueta head que asigne un event handler del DOM a un div para mostrar
un mensaje por consola cuando el ratón se mueva sobre ese elemento */

//  <script>
//     let div = document.getElementById('div1');
//     div.style.border = "1px black solid";
//         div.addEventListener('mouseover', () => {
//         console.log("Sobre el Div1");
//     });
// </script>

/**Ejercicio 2 Events */
/**Cambiar el color del borde de un input cuando tiene el foco, y dejarlo como estaba cuando
pierde el foco */
function ejercio2Events() {
    let input = document.getElementById('input1');
    input.addEventListener('focusin', () => {
        input.style.borderColor = "red";
        console.log("Focus in");
    });
    input.addEventListener('focusout', () => {
        input.style.borderColor = "";
        console.log("Focus out");
    });
}

/**Ejercicio 3
 * <textarea name="textArea" id="textArea" cols="30" rows="10" maxlength="200"></textarea>
    <p id="parrafo">200</p>
    <textarea name="textArea2" id="textArea2" cols="30" rows="10" maxlength="200"></textarea>
 */
function ejercicio3Events() {
    let textArea = document.getElementById('textArea');
    let textArea2 = document.getElementById('textArea2');
    let p = document.getElementById('parrafo');
    let contador = 0;
    textArea.addEventListener('keyup', (letra) => {
        if (letra.code == "Backspace" && contador != 0) contador--;
        else if (letra.code == "Backspace" && contador == 0) contador += 0;
        else if (contador < 200) contador++;
        console.log(contador)
        p.textContent = `${200 - contador}`;
        textArea2.textContent += letra.code;
    });
}
//ejercicio3Events();

/**
 * <div id="div" style="height: 200px;
    width: 200px;justify-content: center;border: 1px solid black">

    <button id="btn" style="background-color: burlywood">Press</button>
    </div>
 */
function ejercicio4Events() {
    let div = document.getElementById('div');
    let btn = document.getElementById('btn');
    div.addEventListener('click', () => {
        div.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    });
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        btn.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

    });
}
//ejercicio4Events();
/**<div style="display: flex; flex-wrap: wrap;align-items: center;
    justify-content: center; width: 700px;height: 200px;">
        <button id="piedra">
            Piedra
        </button>
        <button id="papel">
            Papel
        </button>
        <button id="tijera">
            Tijera
        </button>
    </div> */
function ejercicio5Events() {
    let piedra = document.getElementById('piedra');
    let papel = document.getElementById('papel');
    let tijera = document.getElementById('tijera');
    let arr = ["piedra", "papel", "tijera"];
    piedra.addEventListener('click', () => {
        index = Math.floor(Math.random() * 3)
        console.log(index);
        if (index == 0) alert("La maquina ha sacado: " + arr[index] + " EMPATE")
        else if (index == 1) alert("La maquina ha sacado: " + arr[index] + " Has PERDIDO!")
        else alert("La maquina ha sacado: " + arr[index] + " Has GANADO!")
    });
    papel.addEventListener('click', () => {
        index = Math.floor(Math.random() * 3)
        if (index == 0) alert("La maquina ha sacado: " + arr[index] + " Has GANADO!")
        else if (index == 1) alert("La maquina ha sacado: " + arr[index] + " EMPATE")
        else alert("La maquina ha sacado: " + arr[index] + " Has PERDIDO!")
    });
    tijera.addEventListener('click', () => {
        index = Math.floor(Math.random() * 3)
        if (index == 0) alert("La maquina ha sacado: " + arr[index] + " Has PERDIDO!")
        else if (index == 1) alert("La maquina ha sacado: " + arr[index] + " Has GANADO")
        else alert("La maquina ha sacado: " + arr[index] + " EMPATE")
    });
}
/**body style height: 600px;
 * <div style="border: 1px solid black;height: 200px;
    width: 80%;top: auto;bottom: auto;right: auto;left: auto;position: relative;" id="div">
    </div>
 */
function ejercicio6Events() {
    let div = document.getElementById('div');
    let top = 10;
    let right = 10;
    window.addEventListener('keyup', (event) => {
        if (event.code == "ArrowUp") {
            top = top - 10;
        } else if (event.code == "ArrowDown") {
            top = top + 10;
        } else if (event.code == "ArrowRight") {
            right = right - 10;
        } else if (event.code == "ArrowLeft") {
            right = right + 10;
        }
        div.style.top = `${top}px`;
        div.style.right = `${right}px`;
    });
}

ejercicio6Events();



