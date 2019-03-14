import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [
  //   DatosService  //Crea una instancia para el componente A
  //                 //y sólo abarca a A y a los que estén por debajo
  // ]
})
export class CmpAComponent implements OnInit {
  datos = [];
  constructor(private datosService:DatosService) { }


  ngOnInit() {
    this.datos = this.datosService.getDatos();
  }

  addDato(nuevoDato: HTMLInputElement) {
    this.datosService.saveDato(nuevoDato.value);
    nuevoDato.value = "";
  }

  enviarDato(dato:HTMLInputElement):void{
    this.datosService.sendDato(dato.value);
    dato.value = "";
  }

}
