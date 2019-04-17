import { Component, OnInit } from '@angular/core';

import {HomeService} from '../../servicios/home.service';
import { Resultado } from 'src/app/modelos/Resultado';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  numero1 = "";
  numero2 = "";
  resultado = 0;
  operacion="";
  flag1 = true;
  resultados:Resultado[] = [];
  ngOnInit() {
  }

  creaNum(valor: string) {
    if (this.flag1) {
      this.numero1 = this.numero1.concat(valor);
      console.log(this.numero1);
    }else{
      this.numero2 = this.numero2.concat(valor);
      console.log(this.numero2);
    }
  }

  changeFlag(op:string){
    this.operacion = this.operacion.concat(op);
    console.log("op: "+this.operacion);
    this.flag1 = !this.flag1;
  }

  mostrarResultado(){
    console.log(this.operacion);
    switch(this.operacion){
      case "+":
          console.log("Va a realizar la suma")
          this.homeService.sumar(this.numero1,this.numero2).subscribe((resultado:Resultado)=>{
            console.log("Res: "+resultado.id);
              this.resultado = resultado.resultado;
          });
          break;
      case "-":
      console.log("Va a realizar la resta")
          this.homeService.restar(this.numero1,this.numero2).subscribe((resultado:Resultado)=>{
            console.log("Res: "+resultado.id);
              this.resultado = resultado.resultado;
          });
      break;
    }
  }

  buscar(tipoOp:string){
    this.homeService.buscar(tipoOp).subscribe((lista)=>{
      this.resultados = lista;
    });
  }

}
