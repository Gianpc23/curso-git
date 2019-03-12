import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  mostrar = false;
  items = ["Item 1","Item 2","Item 3"];
  persona = {
    nombre: "Charly",
    apellido:"Falco"
  }
  miMascota = "gato";

  constructor() { }

  ngOnInit() {
  }
  cambiarBoton(){
    this.mostrar = !this.mostrar;
  }

}
