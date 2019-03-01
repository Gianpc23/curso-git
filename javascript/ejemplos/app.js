console.log("Hola a todos");
num = 4;
num = 'Un num';
// console.log(num);

var texto = 'Un texto';
let otroTexto = 'Otro texto';
const UNTEXTO = 'Un texto'; //No se puede modificar luego su valor, es decir, es una cosntante.

/* var vs let */
var n = 1;
let m = 1;  //Solo funciona en el bloque, no más allá
if (true) {
    var n = 2;
    let m = 2;
    // console.log('Dentro:' + n);
    // console.log('Dentro:' + m);
}
// console.log('Fuera:' + n);
// console.log('Fuera:' + m);


let colores = ["Blanco", "Gris", "Negro"];
//console.log(colores[1]);
colores.push("Naranja");
colores[0] = "Verde";
colores[colores.length] = "Caqui";
// console.log(colores);

/**************PEGAR EN LA CONSOLA DEL NAVEGADOR************************** */
// let arr = new Array(0);
// arr.push(prompt("Pregunta 1: zzzz?"));
// arr.push(prompt("Pregunta 2: zzzz?"));
// arr.push(prompt("Pregunta 3: zzzz?"));
// console.log(arr);

// let res = prompt("Introduce un número: ");
// if (res%3 == 0 && res%5 == 0)
//     console.log("Fizz-Buzz");
// else if (res%3 == 0)
//     console.log("Fizz " + res);
// else if (res%5 == 0)
//     console.log("Buzz " + res);

/****************TIPOS DE BUCLE***********************/
/*
for (let i = 0; i < colores.length; i++) {
    console.log(i);
}

for (let i in colores) {
    console.log(colores[i]);
}

for (let i of colores) {
    console.log(i);
}

let persona = {
    nombre: "Robb",
    apellido: "Stark"
};

for (let i in persona) {
    console.log(i);
}
*/
let number = Math.floor(Math.random() * 51);
console.log(number);
let nVeces = 0;
let bool = false;
do {
    let nUser = prompt("Introduce un número del 1 al 50");
    nVeces++;
    bool = (nUser == number) ? true : false;
    if (bool) {
        console.log("Has acertado! NumIntentos: " + nVeces);
        bool = !confirm("Quieres volver a jugar?");
        if (bool == false) {
            number = Math.floor(Math.random() * 51);
            console.log(number);
            nVeces = 0;
        }
    } else if ((number - nUser) > 0 ? console.log("El numero escogido es menor") : console.log("El numero escogido es mayor"));
} while (!bool);


const nums = [1, 2, 3, 4];

const arrX2 = nums.map(function (num) {
    return num * 2;
});
console.log(arrX2);

const numsMenoresA7 = arrX2.filter(function (num) {
    return num < 7;
});
console.log(numsMenoresA7);

const suma = nums.reduce(function (acc, num) {
    return acc += num;  //Numero de la posicion + el nuevo valor y se va acumulando
}, 10);                 //10 es el número base, podemos poner 0
console.log(suma);


const arr3 = nums.filter((num) => {
    return num != 3;
}).map((num) => {
    return 'Item ' + num;
});
console.log(arr3);


/***************************
 *  Funciones autoejecutables
 * ************************* */
(function () {                               //Sin nombre, ya que sólo se ejecutará 1 vez.
    console.log('Función autoejecutable');
}())    //Entre paréntesis se convierte en "expresión", como (2+2) y los () de esta última línea es para 
        //ejecutar la función, como f(), de ahí lo de autoejecutable.














