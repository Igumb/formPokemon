import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';



@Injectable()
export class PokemonService {

	pokeApiUrl: string = "https://pokeapi.co/api/v2/pokemon/"

	constructor( public http: HttpClient ) { }

	getPokemon(nomeOuId: string | number): Observable<any> {

		return this.http.get( this.pokeApiUrl + nomeOuId ).pipe( map(res => res) );

	}

	getPokemonsInRange(startId: number, endId: number): Observable<any> {

		return this.http.get( this.pokeApiUrl + "?offset=" + startId + "&limit=" + (endId-startId) ).pipe( map(res => res) );

	}

}
