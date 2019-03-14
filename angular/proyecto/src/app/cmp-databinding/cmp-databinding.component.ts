import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {
  miNombre: String = "Gian2";
  modoEditar: boolean = true;
  personaje = {
    nombre: "Rickon",
    apellido: "Stark"
  }
  personaHijo = {

  }

  @ViewChild(Hijo1Component) hijo1;



  nombreHijo1 = 'Paquillo';
  constructor() { }
  Texto = "asdasd"
  ngOnInit() {
    this.personaHijo = this.hijo1.persona;
  }
  cambiarModoEditar(): void {
    this.modoEditar = !this.modoEditar;
  }
  cambiaNombre(nombre: string): void {
    this.personaje.nombre = nombre;
  }
}
