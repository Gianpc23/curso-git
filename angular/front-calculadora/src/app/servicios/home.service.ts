import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Resultado } from '../modelos/Resultado';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  URI = "http://localhost:8080/EjercicioCalculadoraREST/operaciones";

  sumar(num1:string, num2:string){
    return this.http.get<Resultado>(this.URI+`/suma?num1=${num1}&num2=${num2}`);
  }
  restar(num1:string, num2:string){
    return this.http.get<Resultado>(this.URI+`/resta?num1=${num1}&num2=${num2}`);
  }

  buscar(tipoOp:string){
    return this.http.get<Resultado[]>(this.URI+`?tipo=${tipoOp}`);
  }

}
