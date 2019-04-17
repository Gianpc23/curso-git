import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/Pokemon'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Output() stat: EventEmitter<any> = new EventEmitter();
  @Input() pokemon: Pokemon = new Pokemon();
  constructor() { }

  ngOnInit() {
  }
  verStats(){
    this.stat.emit(this.pokemon.id);
  }
}
