import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DatosService } from './datos.service';


@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css'],
  // providers:[
  //   DatosService
  // ]
})
export class CmpServiciosComponent implements OnInit {
  datoRecibido = ''
  constructor(private logService: LogService, private datosService:DatosService) { }

  ngOnInit() {
    this.datosService.datoEmitido.subscribe(dato =>{
      this.datoRecibido = dato;
    });
  }

  // mostrarMsg(): void {
  //   this.logService.mostrarMsg("Un mensaje");
  // }
}




