import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = "Login form";
  inputs: string[] = ["Nombre", "Apellido", "Correo"];
  buttons: string[] = ["Clean", "LogIn"];
  constructor() { }

  ngOnInit() {
  }

}
