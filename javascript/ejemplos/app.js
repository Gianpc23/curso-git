import {Mascota} from './mascota';

// console.log("Hola a todos");
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
/*
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
*/

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
// console.log(arr3);


/***************************
 *  Funciones autoejecutables
 * ************************* */
// (function () {                               //Sin nombre, ya que sólo se ejecutará 1 vez.
//     console.log('\nFunción autoejecutable');
// }());       //Entre paréntesis se convierte en "expresión", como (2+2) y los () de esta última línea es para ejecutar la función, como f(), de ahí lo de autoejecutable.
// (function (param) {
//     console.log('Función autoejecutable ' + param);
// }('alguete param'));


/***************************
 * Objetos en JavaScript
* ************************* */
const coche = {
    marca: "Testla",
    modelo: "Model S3",
    color: "Negro"
};

// console.log(coche.marca);
//console.log(coche['marca']);
coche.color = "Blanco";
// console.log(coche);

/*Para eliminar la propiedad*/
delete coche.modelo;
// console.log(coche);

/*Para añadir una nueva propiedad*/
coche.modelo = "Model S";
// console.log(coche);

/**Añadir métodos a los objetos */
// coche.pitar = function(){
//     console.log("Piiiii");
// }
// coche.pitar();

function Coche(marca, modelo, sonido, color) {   //Funciones constructoras   
    this.marca = marca;
    this.modelo = modelo;
    this.sonido = sonido;
    this.color = color;
    // this.pitar = function() {
    //     console.log(this.sonido);
    // }
}

Coche.prototype.pitar = function () {
    console.log("Piiiii");
}

let seat = new Coche("Seat", "Ibiza", "Piii Piii", "Verde");
let bmw = new Coche("BMW", "120", "Piiii", "Negro");
// console.log(seat);
// console.log(bmw);

console.log("------------------------------")

function Serie(titulo, episodiosTotales, episodiosVistos, finalizada) {
    this.titulo = titulo;
    this.episodiosTotales = episodiosTotales;
    this.episodiosVistos = episodiosVistos;
    this.finalizada = finalizada;
}

Serie.prototype.capsRestantes = function () {
    console.log(this.episodiosTotales - this.episodiosVistos);
}

let arrSeries = [new Serie("Serie1", 20, 10, true),
new Serie("Serie2", 30, 5, false)];

function devuelveSeriesNoFinalizadas(arr) {
    console.log(arr.filter((serie) => {
        return !serie.finalizada;
    }));
}
devuelveSeriesNoFinalizadas(arrSeries);


/**
 * Ejemplo de replace en texto
 */
texto = "Paco viene con las rebajas";


/**
 * Ejercicio 5: Crear una función que te dice si son palíndromos o no
 */


function esPalindromo(texto) {
    texto = texto.replace(/ /g, "").toLowerCase();
    let arr1 = texto.split("");
    let arr2 = texto.split("").reverse();
    // console.log(arr1);
    // console.log(arr2);
    return arr1.join("") === arr2.join("") ? true : false;
}
// console.log(esPalindromo("hol al oh"));
// console.log(esPalindromo("hol al o"));

function esPar(num){
    return num%2==0 ? true:false;
}

/**
 * Ejercicio 8
 */

function ejercicio8(arr, fun) {
    let res = [];
    for (let i of arr) {
        if (fun(i)) res.push(i);
    }
    return res;
}
// console.log(ejercicio8(["girafarig","hooh","hooah"], esPalindromo));
// console.log(ejercicio8([2,4,6,7,9], esPar));

/**Otra solucion */
function miFilter(miArray,fnFilter){
    let resultado = [];
    miArray.forEach((elem) =>{
        if(fnFilter(elem))
            resultado.push(elem);
    });
    return resultado;
}
// console.log("----------------");
// console.log(miFilter(["girafarig","hooh","hooah"],esPalindromo));
// console.log(miFilter([2,4,6,7,9],(elem)=>{
//     return elem%2==0;
// }));

/**
 * 
 * Funciones FLECHA!
 * -Son funciones anónimas
 */
b = () => {
    // console.log('b');
}

c = num =>{

 }

d = (num,pos) => {

}

e = (n1,n2) => n1+n2;   //Sin el return 

let numeros = [1,3,6,2,8,0,2];
let max = Math.max(...numeros); //Sin los 3 puntitos serías Math.max(1,3,6,2,8,0,2);
// console.log(max);

/**
 * CLASES EN JS
 */
class Coche1{
    constructor(marca, modelo, sonido, color,duenyo){
        this.marca = marca;
        this.modelo = modelo;
        this.sonido = sonido;
        this.color = color;
        var _duenyo = duenyo;       /**"Privado", y por consenso de ponen con "_" delante */
        this.getDuenyo = () => {    /**Y se definen funciones para acceder a esa variable privada */
            return _duenyo;
        }
        this.setDuenyo = (duenyo) => {
            _duenyo = duenyo;
        }
    }
    /**No se pone la palabra function a las funciones */
    pitar(){
        console.log(this.sonido);
    }
    /**METODO statico para sacar directamente de la clase, sin tener
     * que crear una instancia de Coche1, ya que todos los Coche1 tendrán 4 */
    static getNumRuedas(){
        return 4;
    }

}

const audi = new Coche1('Audi','A4','Piiiii','Negro','Pepito');
audi.pitar();
console.log(audi.marca);
console.log(Coche1.getNumRuedas());
console.log(audi._duenyo);  /**Devuelde undefined porque es "privada" */
console.log(audi.getDuenyo());
audi.setDuenyo('Paquito');
console.log(audi.getDuenyo());

/**
 * HERENCIA EN JS
 */
class Rectangulo{
    constructor(lado, altura){
        this.lado = lado;
        this.altura = altura;
    }
    geArea(){
        return this.lado * this.altura;
    }

}

 class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado);        /**Estamos llamando al constructor de Recatangulo */
    }
}

const c1 = new Cuadrado(3);
console.log('Area Cuadrado: ' + c1.geArea());

/**
 * MODULOS, importar clase mascota del fichero mascota.js
 */
const perro = new Mascota('Toby','perro');
const gato = new Mascota('Felix','gato');





