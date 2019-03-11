import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {
  miNombre: String = "Gian";
  modoEditar: boolean = true;
  personaje = {
    nombre: "Rickon",
    apellido: "Stark"
  }
  constructor() { }
  Texto = "asdasd"
  ngOnInit() {
  }
  cambiarModoEditar(): void {
    this.modoEditar = !this.modoEditar;
  }
  cambiaNombre(nombre: string): void {
    this.personaje.nombre = nombre;
  }
}
