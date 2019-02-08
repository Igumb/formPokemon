import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

import { AppRoutingModule } from './app.routing.module';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { TrainerChildComponent } from './pages/trainer/trainer-child/trainer-child.component';
import { FormularioComponent } from './pages/trainer/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    TrainerComponent,
    TrainerChildComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
