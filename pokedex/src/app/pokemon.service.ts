import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //passar parametro na função de getPokemon id
  getpokemonByID( id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`); //http.get devolve um assincrono por padrão-> sem isso n funcionaria
  }
}
