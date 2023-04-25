import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  title = 'pokemon';
  pokemon : Pokemon = {} as Pokemon;

  constructor(private PokemonService: PokemonService){}

  ngOnInit(): void { //inicialização do componente
    this.loadPokemon();
  }
  loadPokemon() { //chamada ao service
    this.PokemonService.getpokemonByID(8).subscribe(
        {
          next: pokemon => this.pokemon  = pokemon // this.sog -> dog do componente | dog é o que veio do observable
        }

      ); //retorna um observable, e é necessário subscribe esse observable
  }

}
