import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  // Array no qual iremos armazenar nossos pokemons
  pokemon: any;
  // Valor q vamos colocar como placeholder na barra de pesquisa
  placeholderValue: string = "Ex: Bulbasaur";
  // O valor que está na barra de pesquisa
  nomeInput: string = "";
  // Variável que indica se há erros ou não.
  error: boolean = false;


  constructor( public pkmnService: PokemonService ) { }

  ngOnInit() {
  }

  onSubmit() {
    // Sabendo o valor do input e o tipo de pesquisa, só precisamos mandar uma requisição pra API.
    this.error = false;
    // Se o tipo da pesquisa for por nome ou ID:
    console.log( this.nomeInput );
    // Fazemos a requisição
    this.pkmnService.getPokemon( this.nomeInput ).subscribe(
        res => {
          console.log(res);
          this.pokemon = res;
        },
        error => {
          this.error = true;
        }
    );

  }
}
