import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { ListaPokemonService } from 'src/app/services/lista-pokemon.service';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  //private _statSubscription: Subscription;
  pokemon: Pokemon = new Pokemon();
  arrAbilities: {}[] = [];
  arrStats: {}[] = [];
  showStats: boolean = false;
  abilityEffect:string = "";
  showTable:boolean = true;
 
  constructor(private statsService: StatsService,
    private listService: ListaPokemonService) { }

  ngOnInit() {
    this.pokemon.sprites.front_default = 'http://news.quirktastic.co/wp-content/uploads/2019/01/1yzkic.jpg';

    //this._statSubscription =
    this.listService.$stats.subscribe((id: number) => {
      this.showStats = true;
      console.log(id);
      this.arrAbilities = [];
      this.arrStats = [];
      this.listService.getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .subscribe((obj) => {
          this.pokemon = new Pokemon(obj.id, obj.name, obj.abilities, obj.sprites, obj.types.map((t) => t.type.name));
          //Aqui saca los stast
          obj.abilities.map((a) => {
            this.arrAbilities.push({
              name: a.ability.name,
              url: a.ability.url
            })
          });
          obj.stats.map((s) => {
            this.arrStats.push({
              name: s.stat.name,
              base_stat: s.base_stat
            });
          });
        });
    });
  }

  infoAbility(urlAbility: string): void {
    //console.log(urlAbility);
    this.statsService.getAbility(urlAbility)
    .subscribe((obj)=>{
      this.abilityEffect = obj.effect_entries[0].effect;
      console.log(this.abilityEffect);

      this.showTable = false;
      
    });
  }
}
