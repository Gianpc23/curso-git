import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {
  nombre = 'Paquillo';
  @Input() nombrePadre = '';
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  cambiarNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
    this.nombreCambiado.emit(this.nombre);
  }
}
