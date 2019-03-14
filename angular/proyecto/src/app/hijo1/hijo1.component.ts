import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {
  nombre = 'Paquillo';
  @Input() nombrePadre = '';


  constructor() { }

  skills: string[] = [];

  persona = {
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
    foto: "",
    skills:[],
  }

  ngOnInit() {
  }
  cambiarNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
    //this.nombreCambiado.emit(this.nombre);
  }
  anyadirSkill(skill:string) {
    console.log(skill);
    this.skills.push(skill);
    this.persona.skills=this.skills;
  }
}
