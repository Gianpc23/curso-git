import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaPokemonService {

  /**Este hace de puente entre lista-pokemon y stats */
  $stats= new Subject<number>();

  constructor(private http: HttpClient) { }
  URI = "https://pokeapi.co/api/v2/pokemon";

  getFirstPokemons(){
    return this.http.get<any>(this.URI+'?offset=0&limit=9');
  }
  getPokemon(url:string){
    return this.http.get<any>(url);
  }

}
