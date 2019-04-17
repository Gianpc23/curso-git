export class Resultado {
   id:number;
    numero1: number;
    numero2:number;
    tipoOp:string;
    resultado:number;

    constructor(id = 0,numero1=0, numero2=0, tipoOp='', resultado = 0) {
        this.id = id;
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.tipoOp = tipoOp;
        this.resultado = resultado;
    }
}