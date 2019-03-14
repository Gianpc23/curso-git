import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';
import { AppComponent } from '../app.component';
import { CmpAComponent } from './cmp-a/cmp-a.component';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  datos = ["datos 1"];
  datoEmitido = new EventEmitter<string>();
  constructor(private logService: LogService) { }

  getDatos() {
    return this.datos;
  }

  saveDato(nuevoDato: string) {
    this.datos.push(nuevoDato);
    this.logService.mostrarMsg("Se ha añadido " + nuevoDato);
  }

  sendDato(dato:string){
    console.log('Dato: '+dato)
    this.datoEmitido.emit(dato);
  }
}
