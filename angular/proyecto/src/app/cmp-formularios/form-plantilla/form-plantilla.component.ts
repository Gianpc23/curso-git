import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent implements OnInit {
  datos = {
    usuario: 'gian',
    password: '',
    email: '',
  };
  constructor() { }

  ngOnInit() {
  }

  enviarDatos(miForm: NgForm): void {
    console.log(miForm);
  }

}
