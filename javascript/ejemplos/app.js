console.log("Hola a todos");
num = 4;
num = 'Un num';
console.log(num);

var texto = 'Un texto';
let otroTexto = 'Otro texto';
const UNTEXTO = 'Un texto'; //No se puede modificar luego su valor, es decir, es una cosntante.

/* var vs let */
var n = 1;
let m = 1;  //Solo funciona en el bloque, no más allá
if (true) {
    var n = 2;
    let m = 2;
    console.log('Dentro:' + n);
    console.log('Dentro:' + m);
}
console.log('Fuera:' + n);
console.log('Fuera:' + m);








