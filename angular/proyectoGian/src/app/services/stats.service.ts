import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  selectedPoke: Pokemon;
  
  constructor(private http: HttpClient) { }
  //URI = "https://pokeapi.co/api/v2/ability";

  getAbility(url:string){
    return this.http.get<any>(url);
  }

}
