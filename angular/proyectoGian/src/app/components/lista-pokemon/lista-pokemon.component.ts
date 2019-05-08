import { Component, OnInit } from '@angular/core';
import { ListaPokemonService } from '../../services/lista-pokemon.service'
import { Pokemon } from 'src/app/models/Pokemon';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {

  constructor(private listPokService: ListaPokemonService,
    private statsService: StatsService) { }
  pokemons2 = ["pikachu", "pikachu2", "pikachu3", "pikachu4"]
  pokemons: Pokemon[] = [];
  ngOnInit() {
    this.getFirstPokemons();
  }

  getFirstPokemons() {
    this.listPokService.getFirstPokemons().subscribe(
      (pokemonsURL) => {
        for (let i = 0; i < pokemonsURL.results.length; i++) {
          this.listPokService.getPokemon(pokemonsURL.results[i].url).subscribe((obj) => {
            let pokemon = new Pokemon(obj.id, obj.name, obj.abilities, obj.sprites, obj.types.map((t) => t.type.name));
            this.pokemons.push(pokemon);
            console.log(pokemon);
          });
        }
      });
  }
  pokemonSorted() {
    return this.pokemons.sort((pokemon1, pokemon2) => {
      return parseInt(pokemon1.id) - parseInt(pokemon2.id);
    });
  }

  getStats($event: number) {
    this.listPokService.$stats.next($event);
  }

}
