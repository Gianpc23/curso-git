import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { Material } from './material'
import {HttpClientModule} from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatsTableComponent } from './components/stats-table/stats-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ListaPokemonComponent,
    PokemonComponent,
    StatsComponent,
    StatsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
