import { Component, OnInit } from '@angular/core';
import { CmpCanDeactivate } from './editar.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, CmpCanDeactivate {
  datosGuardados = false;
  constructor() { }

  ngOnInit() {
  }

  guardar() {
    this.datosGuardados = !this.datosGuardados;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> |boolean{
    if(this.datosGuardados){
      return true;
    }else{
      return confirm("Quieres salir del componente?");
    }
  }
}
